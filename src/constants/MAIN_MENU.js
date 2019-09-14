import {
  PAGE_ABOUT,
  PAGE_ABOUT_REVIEWS,
  PAGE_ABOUT_US,
  PAGE_SERVICE,
  PAGE_WORKS, PAGE_WORKS_CURRENT,
  PAPER
} from './ROUTES'

export const items = [
  {
    title: {
      to: PAGE_SERVICE,
      text: 'Услуги'
    },
    items: [
      {
        title: 'Покраска авто',
        to: PAGE_SERVICE + 1
      },
      {
        title: 'Ремонт кузовов',
        to: PAGE_SERVICE + 2
      },
      {
        title: 'Сварочные работы',
        to: PAGE_SERVICE + 3
      },
      {
        title: 'Антикоррозийные обработки',
        to: PAGE_SERVICE + 4
      },
      {
        title: 'Ремонт бамперов',
        to: PAGE_SERVICE + 5
      }
    ]
  },
  {
    title: {
      to: PAGE_WORKS_CURRENT,
      text: 'Работы'
    },
    items: [
      {
        title: 'Сделано сегодня',
        to: PAGE_WORKS_CURRENT
      },
      {
        title: 'Ваш автомобиль',
        to: PAGE_WORKS + 1
      },
      {
        title: 'Архив работ',
        to: PAGE_WORKS
      }
    ]
  },
  {
    title: {
      to: PAPER,
      text: 'Интересные статьи'
    }
  },
  {
    title: {
      to: PAGE_ABOUT_US,
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
      },
      {
        title: 'Отзывы',
        to: PAGE_ABOUT_REVIEWS
      }
    ]
  }
]
