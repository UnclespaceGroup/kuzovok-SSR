import _ from 'lodash'
import { useParams } from 'react-router'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, SERVER_URL, URL_REPORT } from 'constants/serverURLs'

const useWorkDetail = () => {
  const { id } = useParams()

  const { data: { title, text, annotation, banner } = {} } = useAxiosData({ url: URL_WORK, where: { id }, single: true }, [id])
  const { data: items } = useAxiosData({ url: URL_REPORT, where: { parentId: id } }, [id])
  const { data: sideMenuList } = useAxiosData({ url: URL_REPORT + 'list', limit: 12 })

  const sideMenuItems = _.map(sideMenuList, item => ({
    title: item.parentTitle,
    text: item.title,
    id: item.parentId
  }))

  const header = {
    title,
    img: SERVER_URL + banner,
    annotation
  }

  const pageItems = _.map(items, item => ({
    ...item
  }))

  const helmetData = {
    title: `Работа над ${title || 'автомобилем'} | Станция кузовного ремонта Кузовок`,
    description: annotation
  }

  return {
    helmetData,
    header,
    text,
    items: pageItems,
    sideMenuItems
  }
}
export default useWorkDetail
