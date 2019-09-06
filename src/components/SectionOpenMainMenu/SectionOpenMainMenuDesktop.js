import React from 'react'
// import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuDesktop.module.scss'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { PAGE_ABOUT, PAGE_SERVICE, PAGE_WORKS } from '../../constants/ROUTES'

const items = [
  {
    title: 'Услуги',
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
    title: 'Форум',
    items: [
      {
        title: 'Автомобили в ремонте',
        to: PAGE_WORKS + 1
      },
      {
        title: 'Наши работы',
        to: PAGE_WORKS + 2
      },
      {
        title: 'Отзывы',
        to: PAGE_ABOUT + 1
      },
      {
        title: 'FAQ',
        to: PAGE_ABOUT + 2
      }
    ]
  },
  {
    title: 'Контакты',
    items: [
      {
        title: 'Как добраться',
        to: PAGE_ABOUT + 3
      },
      {
        title: 'Мы на карте',
        to: PAGE_ABOUT + 4
      },
      {
        title: 'О нас',
        to: PAGE_ABOUT + 5
      }
    ]
  }
]

const SectionOpenMainMenuDesktop = () => (
  <div className={css.container}>
    <Layout className={css.row}>
      {
        items.map((item, key) => (
          <div className={css.column} key={key}>
            <div className={css.title}>{item.title}</div>
            <ul>
              {
                item.items.map((it, k) => <li key={k}><Link to={it.to} className={css.item}>{it.title}</Link></li>)
              }
            </ul>
          </div>
        )
        )
      }
    </Layout>
  </div>
)
SectionOpenMainMenuDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionOpenMainMenuDesktop)
