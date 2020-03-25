import carIcon from 'static/icons/kuz-car.svg'
import { useState } from 'react'
import _ from 'lodash'
import { getStatusByCode, STATUSES } from 'utils/getNameByValue'
import { slugs } from 'constants/workSlugs'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, URL_CARDS } from 'constants/serverURLs'
import { PAGE_WORK_DETAIL } from 'constants/ROUTES'
import { getImagePath } from 'utils/getImagePath'
import moment from 'moment'

const pageId = 'page-works'

const useWorks = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeSelectStatus, setActiveSelectStatus] = useState(-1)

  const { data: pageData = {} } = useAxiosData({ url: URL_CARDS, where: { id: pageId }, single: true })

  const header = {
    icon: carIcon,
    title: pageData.title,
    text: pageData.text,
    img: getImagePath(pageData.banner)
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
    annotation: item.annotation,
    to: PAGE_WORK_DETAIL + item.id,
    img: getImagePath(item.banner),
    subtitle: getStatusByCode(item.status),
    date: item.createdAt,
    title: item.title
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

  const sortedItems = _.sortBy(filteredItems, o => moment(o.date).format('YYYYMMDD')).reverse()

  const helmetData = {
    title: 'Список работ станции Кузовок',
    description: `
      На данной странице представлены все работы станции кузовного ремонта Кузовок.
      Представлены следующие категории работ: Сварочные работы, покраска автомобиля, кузовной ремонт, обработка порогов
      и многое другое. Следите за процессом работы станции. Каждые два дня мы выкладываем отчеты с фотографиями.
    `
  }

  return {
    helmetData,
    header,
    items: sortedItems,
    tabs,
    pending: isPending,
    activeTab,
    select
  }
}

export default useWorks
