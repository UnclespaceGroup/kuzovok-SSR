import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'

const useServiceDetail = ({ params }) => {
  const { slug } = params

  const { data: { title, text, banner, annotation } = {} } = useAxiosData({ url: URL_SERVICE, where: { slug }, single: true })

  const helmetData = {
    title: `${title || 'Услуга'} | Станция кузовного ремонта Кузовок`,
    description: annotation
  }

  return {
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
