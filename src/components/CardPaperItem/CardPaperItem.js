import React from 'react'
import PropTypes from 'prop-types'
import css from './CardPaperItem.module.scss'
import BgImage from '../BgImage/BgImage'
import Button from '../Button/Button'

const CardPaperItem = ({ title, text, actor, date, img, style, to }) => (
  <div className={css.container} style={style}>
    <div className={css.content}>
      <div>
        <div className={css.title}>{title}</div>
        <div className={css.date}>{date}</div>
        <div className={css.actor}>{actor}</div>
        <div className={css.text}>{text}</div>
      </div>
      <div>
        <Button to={to} >Перейти</Button>
      </div>
    </div>
    <div className={css.side}>
      <BgImage img={img} className={css.img} />
    </div>
  </div>
)
CardPaperItem.propTypes = {
  title: PropTypes.node,
  actor: PropTypes.node,
  date: PropTypes.node,
  img: PropTypes.string,
  to: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.node
}

export default React.memo(CardPaperItem)
