import _ from 'lodash'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, SERVER_URL } from 'constants/serverURLs'
import { PAGE_WORK_DETAIL } from 'constants/ROUTES'

const useLastWorks = () => {
  const { data } = useAxiosData({ url: URL_WORK, limit: 3 })
  const items = _.map(data, item => ({
    ...item,
    date: item.createdAt,
    img: SERVER_URL + item.banner,
    to: PAGE_WORK_DETAIL + item.id
  }))

  return {
    items
  }
}
export default useLastWorks
