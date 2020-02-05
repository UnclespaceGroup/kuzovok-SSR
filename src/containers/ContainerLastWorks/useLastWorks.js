import _ from 'lodash'
import useAxiosData from 'hooks/useAxiosData'
import { URL_WORK, SERVER_URL } from 'constants/serverURLs'
import { PAGE_WORK_DETAIL } from 'constants/ROUTES'
import moment from 'moment'

const useLastWorks = () => {
  const { data } = useAxiosData({ url: URL_WORK, limit: 3 })
  const items = _.map(data, item => ({
    ...item,
    date: item.createdAt,
    img: SERVER_URL + item.banner,
    to: PAGE_WORK_DETAIL + item.id
  }))

  const sortedItems = _.sortBy(items, o => moment(o.date).format('YYYYMMDD')).reverse()

  return {
    items: sortedItems
  }
}
export default useLastWorks
