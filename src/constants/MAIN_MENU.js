import {
  PAGE_ABOUT,
  PAGE_SERVICES,
  PAGE_WORKS, PAGE_WORKS_CURRENT,
  PAGE_PAPER
} from './ROUTES'

export const items = [
  {
    title: {
      to: PAGE_SERVICES,
      text: 'Услуги'
    },
    items: [
      {
        title: 'Покраска авто',
        to: PAGE_SERVICES + 1
      },
      {
        title: 'Ремонт кузовов',
        to: PAGE_SERVICES + 2
      },
      {
        title: 'Сварочные работы',
        to: PAGE_SERVICES + 3
      },
      {
        title: 'Антикоррозийные обработки',
        to: PAGE_SERVICES + 4
      },
      {
        title: 'Ремонт бамперов',
        to: PAGE_SERVICES + 5
      }
    ]
  },
  {
    title: {
      to: PAGE_WORKS,
      text: 'Работы'
    },
    items: [
      {
        title: 'Посмотреть все работы',
        to: PAGE_WORKS
      },
      {
        title: 'Сделано сегодня',
        to: PAGE_WORKS_CURRENT
      },
      {
        title: 'Архив работ',
        to: PAGE_WORKS
      }
    ]
  },
  {
    title: {
      to: PAGE_PAPER,
      text: 'Интересные статьи'
    },
    items: [
      {
        title: 'Популярное',
        to: PAGE_PAPER
      }
    ]
  },
  {
    title: {
      to: PAGE_ABOUT,
      text: 'О нас'
    },
    items: [
      {
        title: 'Как добраться',
        to: PAGE_ABOUT
      },
      {
        title: 'Контактная информация',
        to: PAGE_ABOUT
      }
    ]
  }
]
