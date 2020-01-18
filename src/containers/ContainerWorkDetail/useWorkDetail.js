import _ from 'lodash'
import { useParams } from 'react-router'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, SERVER_URL, URL_REPORT } from 'constants/serverURLs'

const useWorkDetail = () => {
  const { id } = useParams()

  const { data } = useAxiosData({ url: URL_WORK, where: { id }, single: true }, [id])
  const { data: items } = useAxiosData({ url: URL_REPORT, where: { parentId: id } }, [id])
  const { data: sideMenuItems } = useAxiosData({ url: URL_REPORT + 'list', limit: 12 })

  const header = data && {
    title: data.title,
    img: SERVER_URL + data.banner,
    annotation: data.annotation
  }

  const pageItems = _.map(items, item => ({
    ...item
  }))

  return {
    header,
    text: data?.text,
    items: pageItems,
    sideMenuItems
  }
}
export default useWorkDetail
