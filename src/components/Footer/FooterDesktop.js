import React from 'react'
// import PropTypes from 'prop-types'
import css from './FooterDesktop.module.scss'
import im from 'static/images/1517716721790_big_vlru.jpg'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

const items = [
  {
    title: 'Услуги',
    items: [
      {
        title: 'Покраска авто',
        to: '/'
      },
      {
        title: 'Ремонт кузовов',
        to: '/'
      },
      {
        title: 'Сварочные работы',
        to: '/'
      },
      {
        title: 'Антикоррозийные обработки',
        to: '/'
      },
      {
        title: 'Ремонт бамперов',
        to: '/'
      }
    ]
  },
  {
    title: 'Форум',
    items: [
      {
        title: 'Автомобили в ремонте',
        to: '/'
      },
      {
        title: 'Наши работы',
        to: '/'
      },
      {
        title: 'Отзывы',
        to: '/'
      },
      {
        title: 'FAQ',
        to: '/'
      }
    ]
  },
  {
    title: 'Контакты',
    items: [
      {
        title: 'Как добраться',
        to: '/'
      },
      {
        title: 'Мы на карте',
        to: '/'
      },
      {
        title: 'О нас',
        to: '/'
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
    </Layout>
  </div>
)
FooterDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(FooterDesktop)
