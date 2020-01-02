/* eslint-disable no-unused-expressions */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import css from 'components/SliderBanner/desktop/SliderBannerDesktop.module.scss'
import Slider from '../../Slider/desktop/Slider'
import BgImage from '../../BgImage/BgImage'
import Button from '../../Button/Button'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Layout from 'components/Layout/Layout'

const SliderBannerDesktop = ({ items }) => {
  const swiperRef = useRef(null)
  return (
    <div className={css.container}>
      <Slider
        getSwiper={ref => { swiperRef.current = ref }}
        effect={'fade'}
        items={items}
        loop autoplayDelay={10000}
      >
        <Slide />
      </Slider>
      <div className={css.btns}>
        <Layout className={css.wrapper}>
          <div className={css.prev}><FaArrowLeft size={'3rem'}
            onClick={() => swiperRef.current?.slidePrev()}
          /></div>
          <div className={css.next}><FaArrowRight size={'3rem'}
            onClick={() => swiperRef.current?.slideNext()}
          /></div>
        </Layout>
      </div>
    </div>
  )
}
SliderBannerDesktop.propTypes = {
  items: PropTypes.array
}

const Slide = ({ img, title, text, url, onClick }) => (
  <BgImage img={img}>
    <div className={css.slide}>
      <Layout className={css.slideWrapper}>
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>
        <div>
          <Button
            to={url}
            onClick={onClick}
          >Перейти</Button>
        </div>
      </Layout>
    </div>
    <div id={'toThis'} />
  </BgImage>
)
Slide.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  url: PropTypes.string
}

export default React.memo(SliderBannerDesktop)