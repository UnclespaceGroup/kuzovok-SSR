import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from './SectionMainServiceCatalogDesktop.module.scss'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'

const SectionMainServiceCatalogDesktop = ({ text, items = [] }) => {
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
                to={item.to || '#'}
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
  items: PropTypes.array,
  text: PropTypes.node
}

export default React.memo(SectionMainServiceCatalogDesktop)
