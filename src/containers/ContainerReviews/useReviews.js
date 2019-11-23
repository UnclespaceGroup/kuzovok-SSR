import React, { useMemo, useState } from 'react'
import { fetchDataListParams } from '../../axios/fetchData'
import im1 from '../../static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import moment from 'moment'
import { MdDateRange } from 'react-icons/md'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from '../../constants/ROUTES'

const useReviews = ({ location }) => {
  const [ items, setItems ] = useState([])
  useMemo(() => {
    const reportsParams = getPerionParams(location)
    fetchDataListParams('/report',
      {
        params: {
          rangeDate: reportsParams
        }
      })
      .then(data => {
        setItems(data.map(item => ({
          ...item,
          galleryData: { photos: item.images && JSON.parse(item.images) }
        })))
      })
  }, [location])

  const headerData = {
    title: 'Работа автостанции',
    text: <div>
      <p>Здесь вы можете просмотреть текущие работы</p>
    </div>,
    img: im1,
    sideBlock: <ControllerSideMenu />,
    icons: [
      {
        icon: <MdDateRange />,
        children: moment().format('LL')
      }
    ]
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
      title: 'За месяц',
      to: PAGE_REVIEWS_MOUTH
    },
    {
      title: 'Все работы',
      to: PAGE_REVIEWS
    }
  ]

  return {
    items,
    headerData,
    tabs
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
      return '0'
    default:
      return ''
  }
}

export default useReviews
