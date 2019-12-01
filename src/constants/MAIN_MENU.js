import {
  PAGE_ABOUT,
  PAGE_SERVICES,
  PAGE_WORKS,
  PAGE_PAPER, PAGE_ABOUT_CONTACTS, PAGE_ABOUT_MAP, PAGE_ABOUT_VIDEO, PAGE_ABOUT_PHOTOS
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
        to: PAGE_SERVICES + 'pokraska-avto'
      },
      {
        title: 'Ремонт кузовов',
        to: PAGE_SERVICES + 'kuzovnoi-remont'
      },
      {
        title: 'Антигравий',
        to: PAGE_SERVICES + 'antigraviy'
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
      to: PAGE_WORKS + 'last',
      text: 'Работы'
    },
    items: [
      {
        title: 'Посмотреть все работы',
        to: PAGE_WORKS + 'all'
      },
      {
        title: 'Сварочные работы',
        to: PAGE_WORKS + 'svarochnye-raboty'
      },
      {
        title: 'Обработка порогов, анигравий',
        to: PAGE_WORKS + 'obrabotka-porogov-i-dnisha'
      },
      {
        title: 'Покраска авто',
        to: PAGE_WORKS + 'pokraska'
      },
      {
        title: 'Кузовной ремонт',
        to: PAGE_WORKS + 'kuzovnoy-remont'
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
        to: PAGE_ABOUT_MAP
      },
      {
        title: 'Контактная информация',
        to: PAGE_ABOUT_CONTACTS
      },
      {
        title: 'Видео',
        to: PAGE_ABOUT_VIDEO
      },
      {
        title: 'Фото станции',
        to: PAGE_ABOUT_PHOTOS
      }
    ]
  }
]
