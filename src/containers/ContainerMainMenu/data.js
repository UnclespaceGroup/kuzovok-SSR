import { PAGE_ABOUT, PAGE_SERVICES, PAGE_WORKS, PAGE_WORKS_CURRENT } from '../../constants/ROUTES'

export const menuItems = [
  {
    title: 'Услуги', href: PAGE_SERVICES
  },
  {
    title: 'Работы за сегодня', href: PAGE_WORKS_CURRENT
  },
  {
    title: 'Машины в ремонте', href: PAGE_WORKS
  },
  {
    title: 'Контакты', href: PAGE_ABOUT
  },
  {
    title: 'О нас', href: PAGE_ABOUT
  }
]
