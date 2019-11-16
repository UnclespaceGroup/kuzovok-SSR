import { fetchDataListParams } from '../../axios/fetchData'

const useLastWorks = async () => {
  const pageData = {}
  await fetchDataListParams(`/work`, {
    params: {
      limit: 3
    }
  })
    .then(data => {
      pageData.items = data.map(item => ({
        ...item,
        img: item.banner
      }))
    })
  return { ...pageData }
}
export default useLastWorks
