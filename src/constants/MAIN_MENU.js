import {
  PAGE_ABOUT,
  PAGE_SERVICES,
  PAGE_WORKS,
  PAGE_PAPER, PAGE_ABOUT_CONTACTS, PAGE_ABOUT_MAP, PAGE_ABOUT_VIDEO, PAGE_ABOUT_PHOTOS, PAGE_REVIEWS
} from './ROUTES'

export const menuItems = [
  {
    title: 'Услуги станции', href: PAGE_SERVICES
  },
  {
    title: 'Последние работы', href: PAGE_REVIEWS + 'week'
  },
  {
    title: 'Автомобили в ремонте', href: PAGE_WORKS
  },
  {
    title: 'Статьи', href: PAGE_PAPER
  },
  {
    title: 'О нас', href: PAGE_ABOUT
  }
]

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
      to: PAGE_WORKS,
      text: 'Работы'
    }
  },
  {
    title: {
      to: PAGE_PAPER,
      text: 'Полезные статьи'
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

export const menu = {
  mainItems: [
    {
      to: PAGE_SERVICES,
      title: 'Услуги'
    },
    {
      to: PAGE_WORKS,
      title: 'Работы'
    },
    {
      to: PAGE_ABOUT,
      title: 'О нас'
    },
    {
      to: PAGE_PAPER,
      title: 'Полезные статьи'
    }
  ],
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
}
