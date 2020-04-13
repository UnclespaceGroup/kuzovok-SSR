import {
  PAGE_REVIEWS,
  PAGE_REVIEWS_MOUTH,
  PAGE_REVIEWS_TODAY,
  PAGE_REVIEWS_WEEK,
  PAGE_WORK_DETAIL
} from 'constants/ROUTES'
import instrIcon from 'static/icons/kus-build.svg'
import useAxiosData from 'hooks/useAxiosData'
import { URL_REPORT, URL_CARDS, URL_WORK } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { useLocation } from 'react-router'
import _ from 'lodash'
// import moment from 'moment'
import { useMemo, useState } from 'react'
import { axiosInstanse } from 'axiosFetch/fetchData'

const pageId = 'page-last'

const PAGINATION_STEP = 2

const useReviews = () => {
  const location = useLocation()
  const locationString = location.pathname + location.search
  const between = getPerionParams(location)

  const [ offset, setOffset ] = useState(0)

  const [items, setItems] = useState([])

  const { data: pageData = {} } = useAxiosData({
    url: URL_CARDS,
    where: { id: pageId },
    single: true
  }, [pageId])

  const { data: { count } = {} } = useAxiosData({
    url: URL_REPORT + 'count',
    between
  }, [locationString])

  const notAll = (items && count) ? items.length < count : true

  const loadList = (offset, isNewList) => {
    axiosInstanse.post(
      URL_REPORT, {
        limit: PAGINATION_STEP,
        between,
        offset
      })
      .then(res => {
        console.log(isNewList, res.data)
        setItems(isNewList ? res.data : items.concat(res.data))
      })
      .catch(e => {
        console.log(e)
      })
  }

  const btnMoreClick = (notAll && count) ? () => {
    if (notAll) {
      const _offset = offset + PAGINATION_STEP
      setOffset(_offset)
      loadList(_offset, false)
    }
  } : undefined

  useMemo(() => {
    setOffset(0)
    loadList(0, true)
  }, [locationString])

  const { data: sideMenuList } = useAxiosData({
    url: URL_WORK,
    limit: 12
  }, [locationString])

  const sideMenuItems = _.map(sideMenuList, item => ({
    title: item.title,
    annotation: item.annotation,
    to: PAGE_WORK_DETAIL + item.id
  }))

  const headerData = {
    title: pageData.title,
    text: pageData.annotation,
    img: getImagePath(pageData.banner),
    icon: instrIcon
  }

  const tabs = [
    {
      title: 'За сегодня',
      to: PAGE_REVIEWS_TODAY
    },
    {
      title: 'За неделю',
      to: PAGE_REVIEWS_WEEK
    },
    {
      title: 'За все время',
      to: PAGE_REVIEWS
    }
  ]

  const _items = _.map(items, item => ({
    ...item,
    date: item.createdAt
  }))
  const helmetData = {
    title: 'Последние работы станции Кузовок',
    description: `
    Каждые два дня мы выкладываем отчеты о проделанной работе над каждым автомобилем в ремонте.
    На этой странице представлены эти отчеты, в хронологическом порядке.
    Следите за процессом работы, будьте в курсе всех событий
    `
  }

  return {
    helmetData,
    items: _items,
    headerData,
    tabs,
    count,
    sideMenuItems,
    btnMoreClick
  }
}

const getPerionParams = ({ pathname }) => {
  const todayDate = new Date()
  const startData = new Date()
  switch (pathname) {
    case PAGE_REVIEWS_TODAY:
      startData.setDate(todayDate.getDate() - 1)
      return [startData, todayDate]
    case PAGE_REVIEWS_WEEK:
      startData.setDate(todayDate.getDate() - 7)
      return [startData, todayDate]
    case PAGE_REVIEWS_MOUTH:
      startData.setDate(todayDate.getMonth() - 1)
      return [startData, todayDate]
    case PAGE_REVIEWS:
      return null
    default:
      return ''
  }
}

export default useReviews
