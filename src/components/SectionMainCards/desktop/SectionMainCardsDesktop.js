import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionMainCardsDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import BgImage from 'components/BgImage/BgImage'

const SectionMainCardsDesktop = ({ cards }) => (
  <Layout className={css.container}>
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
  </Layout>
)
SectionMainCardsDesktop.propTypes = {
  cards: PropTypes.array
}
export default SectionMainCardsDesktop
