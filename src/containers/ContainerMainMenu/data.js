import { PAGE_ABOUT, PAGE_SERVICES, PAGE_WORKS, PAGE_REVIEWS } from '../../constants/ROUTES'

export const menuItems = [
  {
    title: 'Услуги', href: PAGE_SERVICES
  },
  {
    title: 'Сделано сегодня', href: PAGE_REVIEWS + 'today'
  },
  {
    title: 'Машины в ремонте', href: PAGE_WORKS + 'last'
  },
  {
    title: 'Работы сервиса', href: PAGE_WORKS + 'last'
  },
  {
    title: 'О нас', href: PAGE_ABOUT
  }
]
