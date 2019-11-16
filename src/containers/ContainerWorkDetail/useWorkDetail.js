import { fetchDataList, fetchDataSingle } from '../../axios/fetchData'

const useWorkDetail = async ({ id }) => {
  const pageData = {}
  await fetchDataSingle(`/work/${id}`)
    .then(data => {
      if (!data) return
      pageData.header = {
        title: data.title,
        img: data.banner,
        tags: (data.tags && data.tags.indexOf('#') !== -1 && data.tags.slice(1).split('#')) || null
      }
      pageData.data = {
        text: data.text
      }
    })
  await fetchDataList(`/report?parentId=${id}`)
    .then(data => {
      pageData.items = data.map(item => ({
        ...item,
        galleryData: { photos: item.images && JSON.parse(item.images) }
      }))
    })

  return {
    ...pageData
  }
}
export default useWorkDetail
