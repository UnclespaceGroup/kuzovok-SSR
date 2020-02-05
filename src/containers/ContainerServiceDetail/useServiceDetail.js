import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE, SERVER_URL } from 'constants/serverURLs'

const useServiceDetail = ({ params }) => {
  const { slug } = params

  const { data } = useAxiosData({ url: URL_SERVICE, where: { slug }, single: true })

  return {
    bannerData: {
      title: data?.title,
      text: data?.annotation,
      img: SERVER_URL + data?.banner
    },
    content: {
      text: data?.text
    }
  }
}

export default useServiceDetail
