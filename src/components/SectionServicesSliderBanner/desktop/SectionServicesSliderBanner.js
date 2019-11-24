import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionServicesSliderBanner.module.scss'
import Slider from '../../Slider/desktop/Slider'
import BgImage from '../../BgImage/BgImage'
import Button from '../../Button/Button'

const SectionServicesSliderBanner = ({ items }) => (
  <div className={css.container}>
    <Slider items={items} loop autoplayDelay={10000}>
      <Slide />
    </Slider>
  </div>
)
SectionServicesSliderBanner.propTypes = {
  items: PropTypes.array
}

const Slide = ({ img, title, text, url }) => (
  <BgImage img={img}>
    <div className={css.slide}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
      <Button to={url}>Перейти</Button>
    </div>
  </BgImage>
)
Slide.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  url: PropTypes.string
}

export default React.memo(SectionServicesSliderBanner)
