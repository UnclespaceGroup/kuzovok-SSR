import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionMainCardsMobile.module.scss'
import BgImage from 'components/BgImage/BgImage'

const SectionMainCardsMobile = ({ cards }) => (
  <div>
    {
      _.map(cards, (card, key) => (
        <BgImage key={key} img={card.img} className={css.card}>
          <div className={css.wrapper}>
            <div className={css.title}>{card.title}</div>
            <div className={css.text}>{card.text}</div>
          </div>
        </BgImage>
      ))
    }
  </div>
)
SectionMainCardsMobile.propTypes = {
  cards: PropTypes.array
}
export default SectionMainCardsMobile
