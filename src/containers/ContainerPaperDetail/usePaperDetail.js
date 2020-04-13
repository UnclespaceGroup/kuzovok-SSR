import { useParams } from 'react-router'
import useAxiosData from 'hooks/useAxiosData'
import { URL_PAPER } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { PAGE_PAPER } from 'constants/ROUTES'

const usePaperDetail = () => {
  const { id } = useParams()

  const {
    data: { title, annotation, text, banner } = {},
    isEmpty
  } = useAxiosData({ url: URL_PAPER, where: { id }, single: true })

  const helmetData = {
    title: title,
    description: annotation
  }

  return {
    helmetData,
    bannerData: {
      backLink: PAGE_PAPER,
      title,
      text: annotation,
      img: getImagePath(banner)
    },
    content: text,
    isEmpty
  }
}
export default usePaperDetail
