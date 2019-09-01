import React, { useState } from 'react'
import css from './SectionMainServiceCatalogDesktop.module.scss'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import bg1 from 'static/images/im1.jpg'
import bg2 from 'static/images/im2.jpg'
import bg3 from 'static/images/im3.jpg'
import bg4 from 'static/images/im4.jpg'
import bg5 from 'static/images/im5.jpg'
import bg6 from 'static/images/bba649u-960.jpg'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const items = [
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg1
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg2
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg3
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg4
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg5
  },
  {
    title: 'Кузовной ремонт',
    to: '/',
    img: bg6
  }
]

const SectionMainServiceCatalogDesktop = () => {
  const [ activeSlide, setActiveSlide ] = useState(0)
  return (
    <div className={css.container} style={{ backgroundImage: `url(${items[activeSlide]?.img})` }}>
      <Layout className={css.wrapper}>
        <div className={css.content}>
          <div className={css.title} >Каталог наших услуг</div>
          <div className={css.text}>{text}</div>
        </div>
        <div className={css.items}>
          {
            items.map((item, key) => (
              <Link
                to={item.to}
                key={key}
                onMouseEnter={() => setActiveSlide(key)}
                className={css.item}
              >{item.title}
              </Link>
            ))
          }
        </div>
      </Layout>
    </div>
  )
}
SectionMainServiceCatalogDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionMainServiceCatalogDesktop)
