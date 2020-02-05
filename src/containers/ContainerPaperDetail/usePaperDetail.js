import { useParams } from 'react-router'
import useAxiosData from 'hooks/useAxiosData'
import { URL_PAPER } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { PAGE_PAPER } from 'constants/ROUTES'

const usePaperDetail = () => {
  const { id } = useParams()

  const { data } = useAxiosData({ url: URL_PAPER, where: { id }, single: true })

  return {
    bannerData: {
      backLink: PAGE_PAPER,
      title: data?.title,
      text: data?.annotation,
      img: getImagePath(data?.banner)
    },
    content: data?.text
  }
}
export default usePaperDetail
