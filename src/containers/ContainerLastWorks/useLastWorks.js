import { fetchDataListParams } from 'axios/fetchData'
import _ from 'lodash'

const useLastWorks = async () => {
  const pageData = {}
  await fetchDataListParams(`/work`, {
    params: {
      limit: 3
    }
  })
    .then(data => {
      pageData.items = _.map(data, item => ({
        ...item,
        date: item.createdAt,
        img: item.banner
      }))
    })
  return { ...pageData }
}
export default useLastWorks
