import _ from 'lodash'
import { useParams } from 'react-router'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, URL_REPORT } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { PAGE_WORK_DETAIL } from 'constants/ROUTES'

const useWorkDetail = () => {
  const { id } = useParams()

  const {
    data: { title, text, annotation, banner } = {},
    isEmpty
  } = useAxiosData({ url: URL_WORK, where: { id }, single: true }, [id])
  const { data: items } = useAxiosData({ url: URL_REPORT, where: { parentId: id } }, [id])
  const { data: sideMenuList } = useAxiosData({ url: URL_WORK, limit: 12 })

  const sideMenuItems = _.map(sideMenuList, item => ({
    title: item.title,
    annotation: item.annotation,
    to: PAGE_WORK_DETAIL + item.id
  }))

  const header = {
    title,
    img: getImagePath(banner),
    annotation
  }

  const pageItems = _.map(items, item => ({
    ...item,
    date: item.createdAt
  }))

  const helmetData = {
    title: `Работа над ${title || 'автомобилем'} | Станция кузовного ремонта Кузовок`,
    description: annotation
  }

  return {
    helmetData,
    header,
    isEmpty,
    text,
    items: pageItems,
    sideMenuItems
  }
}
export default useWorkDetail
