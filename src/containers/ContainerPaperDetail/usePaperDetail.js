import { fetchDataSingle } from 'axiosFetch/fetchData'
import { useParams } from 'react-router'
import { useState } from 'react'

const usePaperDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState({})

  fetchDataSingle(`paper/${id}`)
    .then(data => {
      setData(data)
    })

  return {
    bannerData: {
      title: data?.title,
      text: data?.annotation,
      img: data?.banner
    },
    content: data?.text
  }
}
export default usePaperDetail
