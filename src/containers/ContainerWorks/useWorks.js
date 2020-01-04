import photo from 'static/images/Pokraska-3.jpg'
import carIcon from 'static/icons/kuz-car.svg'
import { useMemo, useState } from 'react'
import { fetchDataListParams } from 'axiosFetch/fetchData'
import _ from 'lodash'
import { getStatusByCode, STATUSES } from 'utils/getNameByValue'
import { slugs } from 'constants/workSlugs'

const useWorks = () => {
  const [pending, setPending] = useState(false)
  const [items, setItems] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [activeSelectStatus, setActiveSelectStatus] = useState(-1)

  const header = {
    icon: carIcon,
    title: 'Все работы станции',
    text: '',
    img: photo
  }

  const tabs = [{
    title: 'Все',
    onClick: () => {
      setActiveTab(0)
    }
  }].concat(
    _.map(slugs, slug => ({
      title: slug.title,
      onClick: () => {
        setActiveTab(slug.id)
      }
    }))
  )

  const getParamsByActiveTab = number => {
    const activeTab = slugs.find(item => item.id === number)
    return activeTab ? activeTab.params : {}
  }

  useMemo(() => {
    fetchDataListParams(`/work/`, {
      params: { ...getParamsByActiveTab(activeTab) }
    })
      .then(data => {
        const items = _.map(data, item => ({
          ...item,
          status: item.status || 0,
          text: item.annotation,
          img: item.banner,
          subtitle: getStatusByCode(item.status),
          date: item.createdAt
        }))
        setPending(false)
        setItems(items)
      })
      .catch(e => {
        setPending(false)
      })
  }, [activeTab])

  const select = {
    placeholder: 'Все работы',
    options: [{
      label: 'Все работы',
      value: -1
    }].concat(STATUSES.map((item, key) => ({
      label: item,
      value: key
    }))),
    onChange: ({ value }) => {
      setActiveSelectStatus(value)
    }
  }

  const filteredItems = activeSelectStatus === -1 ? items : _.filter(items, item => +item.status === activeSelectStatus)

  return {
    header,
    items: filteredItems,
    pending,
    tabs,
    activeTab,
    select
  }
}

export default useWorks
