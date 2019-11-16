import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './Slider.module.scss'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

const Slider = ({ items, children, loop, autoplayDelay }) => (
  <div>
    <Swiper
      pagination={{
        el: '.swiper-pagination',
        clickable: true
      }}
      loop={loop}
      autoplay={{
        delay: autoplayDelay
      }}
      containerClass={`${css.container}`}
    >
      {
        _.map(items, (item, key) => (
          <div key={key} className={css.slide}>
            {
              React.cloneElement(children, { ...item })
            }
          </div>
        ))
      }
    </Swiper>
  </div>
)
Slider.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node,
  loop: PropTypes.bool,
  autoplayDelay: PropTypes.number
}

export default React.memo(Slider)
