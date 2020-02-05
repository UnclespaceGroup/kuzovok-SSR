import React from 'react'
import PropTypes from 'prop-types'
import css from './CardPaperItemMobile.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'

const CardPaperItemMobile = ({ title, text, actor, date, img, style, to }) => (
  <div className={css.container} style={style}>
    <BgImage img={img} className={css.img} />
    <div className={css.title}>{title}</div>
    <div className={css.date}>{date}</div>
    <div className={css.actor}>{actor}</div>
    <div className={css.text}>{text}</div>
    <Button className={css.btn} to={to} >Перейти</Button>
  </div>
)
CardPaperItemMobile.propTypes = {
  title: PropTypes.node,
  actor: PropTypes.node,
  date: PropTypes.node,
  img: PropTypes.string,
  to: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.node
}

export default React.memo(CardPaperItemMobile)
