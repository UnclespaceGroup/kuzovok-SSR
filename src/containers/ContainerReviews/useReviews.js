import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from 'constants/ROUTES'
import instrIcon from 'static/icons/kus-build.svg'
import useAxiosData from 'hooks/useAxiosData'
import { URL_REPORT, URL_PAGE } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { useLocation } from 'react-router'
import _ from 'lodash'

const pageId = 'reports'

const useReviews = () => {
  const location = useLocation()
  const rangeData = getPerionParams(location)

  const { data: pageData = {} } = useAxiosData({ url: URL_PAGE, where: { id: pageId }, single: true })
  const { data: items = [], isPending } = useAxiosData({ url: URL_REPORT, rangeData }, [location])
  const { data: sideMenuList } = useAxiosData({ url: URL_REPORT + 'list', limit: 12 }, [location])

  const sideMenuItems = _.map(sideMenuList, item => ({
    title: item.parentTitle,
    text: item.title,
    id: item.parentId
  }))

  const headerData = {
    title: pageData.title,
    text: pageData.text,
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
      title: 'За месяц',
      to: PAGE_REVIEWS_MOUTH
    }
  ]

  return {
    items,
    headerData,
    tabs,
    pending: isPending,
    sideMenuItems
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
