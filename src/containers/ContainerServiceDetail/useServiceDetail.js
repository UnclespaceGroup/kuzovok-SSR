import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { useParams } from 'react-router'

const useServiceDetail = () => {
  const params = useParams()
  const { slug } = params

  const {
    data: { title, text, banner, annotation } = {},
    isEmpty
  } = useAxiosData({
    url: slug ? URL_SERVICE : undefined,
    where: { slug },
    single: true,
    isNotReady: slug
  }, [slug])

  const helmetData = {
    title: `${title || 'Услуга'} | Станция кузовного ремонта Кузовок`,
    description: annotation
  }

  return {
    isEmpty,
    helmetData,
    bannerData: {
      title,
      text: annotation,
      img: getImagePath(banner)
    },
    content: {
      text
    }
  }
}

export default useServiceDetail
