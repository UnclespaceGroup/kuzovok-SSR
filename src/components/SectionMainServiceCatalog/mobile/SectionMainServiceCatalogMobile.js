import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionMainServiceCatalogMobile.module.scss'
import { Link } from 'react-router-dom'
import LayoutMobile from 'components/Layout/LayoutMobile'
import SliderMobile from 'components/Slider/mobile/SliderMobile'
import { FaArrowCircleRight } from 'react-icons/fa'
import BgImage from 'components/BgImage/BgImage'

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
                  <Link to={item.to || '#'} className={css.link}>
                    <FaArrowCircleRight size={'6.4rem'} />
                  </Link>
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
