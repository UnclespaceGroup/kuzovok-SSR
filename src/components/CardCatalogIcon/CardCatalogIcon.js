import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogIcon.module.scss'
import { Link } from 'react-router-dom'

const CardCatalogIcon = ({ img, title, to, className }) => (
  <Link to={to} className={cn(css.container, className)}>
    <div style={{ backgroundImage: `url(${img})` }} className={css.img} />
    <div className={css.title}>{title}</div>
  </Link>
)
CardCatalogIcon.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string
}

export default React.memo(CardCatalogIcon)
