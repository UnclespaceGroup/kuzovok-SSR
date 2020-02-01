import {
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS,
  PAGE_ABOUT
} from 'constants/ROUTES'
import useAxiosData from 'hooks/useAxiosData'
import { URL_PAGE } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'

const pageId = 'about'

const useAbout = () => {
  const { data = {} } = useAxiosData({ url: URL_PAGE, where: { id: pageId }, single: true })

  const items = [
    {
      to: PAGE_ABOUT,
      title: 'Контакты'
    },
    {
      to: PAGE_ABOUT_PHOTOS,
      title: 'Фото станции'
    },
    {
      to: PAGE_ABOUT_MAP,
      title: 'Как добраться'
    }
  ]

  return {
    items,
    bannerData: {
      title: data.title,
      img: getImagePath(data.banner)
    }
  }
}

export default useAbout
