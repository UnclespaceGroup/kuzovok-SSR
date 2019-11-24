import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogSizebleMobile.module.scss'
import { Link } from 'react-router-dom'

const CardCatalogSizebleMobile = ({ img, banner, title, to, className, text }) => (
  <Link to={to} className={cn(css.container, className)} >
    <div className={css.image} style={{ backgroundImage: `url(${banner})` }} />
    <div className={css.wrapper} >
      <div style={{ backgroundImage: `url(${img})` }} className={css.img} />
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </div>
  </Link>
)
CardCatalogSizebleMobile.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string,
  banner: PropTypes.string,
  text: PropTypes.node
}

export default React.memo(CardCatalogSizebleMobile)
