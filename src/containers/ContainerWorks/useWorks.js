import photo from 'static/images/Pokraska-3.jpg'
import carIcon from 'static/icons/kuz-car.svg'
import { useState } from 'react'
import _ from 'lodash'
import { getStatusByCode, STATUSES } from 'utils/getNameByValue'
import { slugs } from 'constants/workSlugs'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, SERVER_URL } from 'constants/serverURLs'

const useWorks = () => {
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

  const getParamsByActiveTab = () => {
    const _activeTab = slugs.find(item => item.id === activeTab)
    return _activeTab ? _activeTab.where : {}
  }

  const { data: list, isPending } = useAxiosData({
    url: URL_WORK,
    where: getParamsByActiveTab()
  }, [activeTab])

  const items = _.map(list, item => ({
    status: item.status || 0,
    text: item.annotation,
    img: SERVER_URL + item.banner,
    subtitle: getStatusByCode(item.status),
    date: item.createdAt
  }))

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
    tabs,
    pending: isPending,
    activeTab,
    select
  }
}

export default useWorks
