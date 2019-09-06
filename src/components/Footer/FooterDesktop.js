import React from 'react'
// import PropTypes from 'prop-types'
import css from './FooterDesktop.module.scss'
import im from 'static/images/1517716721790_big_vlru.jpg'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { PAGE_ABOUT, PAGE_SERVICE, PAGE_WORKS } from '../../constants/ROUTES'

const items = [
  {
    title: 'Услуги',
    items: [
      {
        title: 'Покраска авто',
        to: PAGE_SERVICE
      },
      {
        title: 'Ремонт кузовов',
        to: PAGE_SERVICE
      },
      {
        title: 'Сварочные работы',
        to: PAGE_SERVICE
      },
      {
        title: 'Антикоррозийные обработки',
        to: PAGE_SERVICE
      },
      {
        title: 'Ремонт бамперов',
        to: PAGE_SERVICE
      }
    ]
  },
  {
    title: 'Форум',
    items: [
      {
        title: 'Автомобили в ремонте',
        to: PAGE_WORKS
      },
      {
        title: 'Наши работы',
        to: PAGE_WORKS
      },
      {
        title: 'Отзывы',
        to: PAGE_ABOUT
      },
      {
        title: 'FAQ',
        to: PAGE_ABOUT
      }
    ]
  },
  {
    title: 'Контакты',
    items: [
      {
        title: 'Как добраться',
        to: PAGE_ABOUT
      },
      {
        title: 'Мы на карте',
        to: PAGE_ABOUT
      },
      {
        title: 'О нас',
        to: PAGE_ABOUT
      }
    ]
  }
]

const FooterDesktop = () => (
  <div className={css.container} style={{ backgroundImage: `url(${im})` }}>
    <Layout className={css.wrapper}>
      <div className={css.row}>
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
      </div>
      <div className={css.row}>
        Контактный блок
      </div>
    </Layout>
  </div>
)
FooterDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(FooterDesktop)
