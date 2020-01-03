import { fetchDataList, fetchDataSingle } from 'axiosFetch/fetchData'
import _ from 'lodash'
import { safelyParsing } from 'utils/Json'
import { useParams } from 'react-router'
import { useState, useMemo } from 'react'

const useWorkDetail = () => {
  const [pageData, setPageData] = useState({})
  const [pageItems, setPageItems] = useState([])
  const { id } = useParams()

  useMemo(() => {
    if (id) {
      fetchDataSingle(`/work/${id}`)
        .then(data => {
          if (!data) return
          setPageData({
            title: data.title,
            img: data.banner,
            tags: (data.tags && data?.tags.indexOf('#') !== -1 && data.tags.slice(1).split('#')) || null,
            text: data.text
          })
        })
      fetchDataList(`/report?parentId=${id}`)
        .then(data => {
          setPageItems(_.map(data, item => ({
            ...item,
            galleryData: { photos: safelyParsing(item.images) }
          }))
          )
        })
    }
  }, [id])

  return {
    ...pageData,
    header: { ...pageData, text: '' },
    text: pageData.text,
    items: pageItems
  }
}
export default useWorkDetail
