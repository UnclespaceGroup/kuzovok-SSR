import React, { useMemo, useState } from 'react'
import { fetchDataListParams } from 'axiosFetch/fetchData'
import im1 from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import moment from 'moment'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from '../../constants/ROUTES'
import instrIcon from 'static/icons/kus-build.svg'

const useReviews = ({ location }) => {
  const [ items, setItems ] = useState([])
  const [ pending, setPending ] = useState(false)
  useMemo(() => {
    const reportsParams = getPerionParams(location)
    setPending(true)
    fetchDataListParams('/report',
      {
        params: {
          rangeDate: reportsParams
        }
      })
      .then(data => {
        const _items = data
          .map(item => ({
            ...item,
            galleryData: { photos: item.images && JSON.parse(item.images) }
          }))
          .sort((before, current) => moment(before.date).isAfter(current.date) ? -1 : 1)
        setItems(_items)
        setPending(false)
      }).catch(e => {
        setPending(false)
      })
  }, [location])

  const headerData = {
    title: 'Последние работы',
    text: <div>
      <p>Здесь вы можете просмотреть отчеты по последним работам станции</p>
    </div>,
    img: im1,
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
      title: 'За месяц',
      to: PAGE_REVIEWS_MOUTH
    }
  ]

  return {
    items,
    headerData,
    tabs,
    pending
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
