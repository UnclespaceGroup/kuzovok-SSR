import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionMainServiceCatalogMobile.module.scss'
import LayoutMobile from 'components/Layout/LayoutMobile'
import SliderMobile from 'components/Slider/mobile/SliderMobile'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'

const SectionMainServiceCatalogMobile = ({ items = [], text }) => {
  return (
    <div className={css.container} >
      <LayoutMobile className={css.wrapper}>
        <div className={css.content}>
          <div className={css.title} >Каталог наших услуг</div>
          <div className={css.text}>{text}</div>
        </div>
      </LayoutMobile>

      <SliderMobile rebuildOnUpdate className={css.slider} >
        {
          items.map((item, key) => (
            <div key={key} >
              <BgImage img={item.img}>
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
      </SliderMobile>
    </div>
  )
}
SectionMainServiceCatalogMobile.propTypes = {
  items: PropTypes.array,
  text: PropTypes.string
}

export default React.memo(SectionMainServiceCatalogMobile)
