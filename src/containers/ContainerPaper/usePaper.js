import img from 'static/images/allfons.jpg'
import { PAGE_PAPER } from 'constants/ROUTES'
import im from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'

const usePaper = () => {
  const bannerData = {
    title: 'Полезные статьи',
    text: '',
    img: img
  }
  const items = [
    {
      title: 'Обработка антигравийной смесью',
      date: 'Опубликовано 3 дня назад',
      actor: 'Автор: Алексей Миранчук',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      to: PAGE_PAPER + '5',
      img: im
    },
    {
      title: 'Обработка антигравийной смесью',
      date: 'Опубликовано 3 дня назад',
      actor: 'Автор: Алексей Миранчук',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      to: PAGE_PAPER + '5',
      img: im
    }
  ]

  return {
    bannerData,
    items
  }
}
export default usePaper
