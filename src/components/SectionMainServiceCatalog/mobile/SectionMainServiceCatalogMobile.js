import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionMainServiceCatalogMobile.module.scss'
import { Link } from 'react-router-dom'
import LayoutMobile from 'components/Layout/LayoutMobile'
import SliderMobile from 'components/Slider/mobile/SliderMobile'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import BgImage from 'components/BgImage/BgImage'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const SectionMainServiceCatalogMobile = ({ items = [] }) => {
  return (
    <div className={css.container} >
      <LayoutMobile className={css.wrapper}>
        <div className={css.content}>
          <div className={css.title} >Каталог наших услуг</div>
          <div className={css.text}>{text}</div>
        </div>
      </LayoutMobile>

      <SliderMobile className={css.slider} >
        {
          items.map((item, key) => (
            <div key={key} >
              <BgImage img={item.img}>
                <div
                  className={css.item}
                >
                  <div>{item.title}</div>
                  <Link to={item.to} className={css.link}>
                    <FaArrowAltCircleRight size={'6.4rem'} />
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
  items: PropTypes.array
}

export default React.memo(SectionMainServiceCatalogMobile)
