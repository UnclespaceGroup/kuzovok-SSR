import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogSizeble.module.scss'
import { Link } from 'react-router-dom'

const CardCatalogSizeble = ({ img, banner, color, title, to, className, text }) => (
  <Link to={to} className={cn(css.container, className)} >
    <div className={css.image} style={{ backgroundImage: `url(${banner})` }} />
    <div className={cn(css.wrapper, css[color])} >
      <div style={{ backgroundImage: `url(${img})` }} className={css.img} />
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </div>
  </Link>
)
CardCatalogSizeble.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string,
  banner: PropTypes.string,
  text: PropTypes.node,
  color: PropTypes.string
}

export default React.memo(CardCatalogSizeble)
