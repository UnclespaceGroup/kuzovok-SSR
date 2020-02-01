import useAxiosData from 'hooks/useAxiosData'
import { URL_DATA } from 'constants/serverURLs'

const useAboutPhotos = () => {
  const { data } = useAxiosData({ url: URL_DATA, where: { id: 'stationPhotos' }, single: true })
  return {
    data: {
      text: data?.text
    }
  }
}

export default useAboutPhotos
