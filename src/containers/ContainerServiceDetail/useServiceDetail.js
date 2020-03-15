import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE, SERVER_URL } from 'constants/serverURLs'

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
      img: SERVER_URL + banner
    },
    content: {
      text
    }
  }
}

export default useServiceDetail
