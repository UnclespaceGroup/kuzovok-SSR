import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/SliderBanner/mobile/SliderBannerMobile.module.scss'
import Slider from 'components/Slider/desktop/Slider'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'

const SliderBannerMobile = ({ items }) => (
  <div className={css.container}>
    <Slider effect={'fade'} items={items} loop autoplayDelay={10000}>
      <Slide />
    </Slider>
  </div>
)
SliderBannerMobile.propTypes = {
  items: PropTypes.array
}

const Slide = ({ img, title, text, url, onClick }) => (
  <BgImage img={img}>
    <div className={css.slide}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
      <Button className={css.btn} to={url} onClick={onClick}>Перейти</Button>
    </div>
    <div id={'toThis'} />
  </BgImage>
)
Slide.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  url: PropTypes.string,
  onClick: PropTypes.func
}

export default React.memo(SliderBannerMobile)
