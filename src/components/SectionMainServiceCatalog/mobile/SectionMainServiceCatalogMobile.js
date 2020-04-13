import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionMainServiceCatalogMobile.module.scss'
import LayoutMobile from 'components/Layout/LayoutMobile'
import Slider from 'components/Slider/Slider'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { PAGE_SERVICES } from '../../../constants/ROUTES'

const SectionMainServiceCatalogMobile = ({ items = [], text }) => {
  return (
    <div className={css.container} >
      <LayoutMobile className={css.wrapper}>
        <div className={css.content}>
          <div className={css.title} >Каталог наших услуг</div>
          <div className={css.text}>{text}</div>
        </div>

        <Slider className={css.slider} >
          {
            _.map(items, (item, key) => (
              <div key={key} >
                <BgImage className={css.itemWrapper} img={item.img}>
                  <div
                    className={css.item}
                  >
                    <div>{item.title}</div>
                    <Button
                      to={item.to || '#'}
                    >Перейти</Button>
                  </div>
                </BgImage>
              </div>
            ))
          }
        </Slider>
        <Link to={PAGE_SERVICES} className={css.footer}>Посмотреть все услуги</Link>
      </LayoutMobile>

    </div>
  )
}
SectionMainServiceCatalogMobile.propTypes = {
  items: PropTypes.array,
  text: PropTypes.string
}

export default React.memo(SectionMainServiceCatalogMobile)
