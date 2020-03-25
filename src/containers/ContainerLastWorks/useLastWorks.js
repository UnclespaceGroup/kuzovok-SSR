import _ from 'lodash'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK } from 'constants/serverURLs'
import { PAGE_WORK_DETAIL } from 'constants/ROUTES'
import { getImagePath } from 'utils/getImagePath'

const useLastWorks = () => {
  const { data } = useAxiosData({ url: URL_WORK, limit: 3 })
  const items = _.map(data, item => ({
    ...item,
    date: item.createdAt,
    img: getImagePath(item.banner),
    to: PAGE_WORK_DETAIL + item.id
  }))

  return {
    items
  }
}
export default useLastWorks
