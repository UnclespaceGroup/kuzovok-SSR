import im1 from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import {
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS,
  PAGE_ABOUT_VIDEO,
  PAGE_ABOUT
} from 'constants/ROUTES'

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
      img: im1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
    }
  }
}

export default useAbout
