import {
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS,
  PAGE_ABOUT_VIDEO,
  PAGE_ABOUT
} from 'constants/ROUTES'
import banner1 from 'static/processed-images/kusovok-customer-banner-1.jpg'

const useAbout = () => {
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
      to: PAGE_ABOUT_VIDEO,
      title: 'Видео'
    },
    {
      to: PAGE_ABOUT_MAP,
      title: 'Как добраться'
    }
  ]

  return {
    items,
    bannerData: {
      title: 'Станция Кузовок',
      img: banner1
    }
  }
}

export default useAbout
