import { fetchDataList, fetchDataSingle } from 'axiosFetch/fetchData'
import _ from 'lodash'
import { safelyParsing } from 'utils/Json'

const useWorkDetail = async ({ id }) => {
  const pageData = {}
  if (!id) return
  await fetchDataSingle(`/work/${id}`)
    .then(data => {
      if (!data) return
      pageData.header = {
        title: data.title,
        img: data.banner,
        tags: (data.tags && data?.tags.indexOf('#') !== -1 && data.tags.slice(1).split('#')) || null
      }
      pageData.data = {
        text: data.text
      }
    })
  await fetchDataList(`/report?parentId=${id}`)
    .then(data => {
      pageData.items = _.map(data, item => ({
        ...item,
        galleryData: { photos: safelyParsing(item.images) }
      }))
    })

  return {
    ...pageData
  }
}
export default useWorkDetail
