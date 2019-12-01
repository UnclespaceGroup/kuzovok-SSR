import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogSizebleMobile.module.scss'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const CardCatalogSizebleMobile = ({ img, banner, title, to, className, text }) => (
  <Link to={to} className={cn(css.container, className)} >
    <div className={css.image} style={{ backgroundImage: `url(${banner})` }} />
    <div className={css.wrapper} >
      <div style={{ backgroundImage: `url(${img})` }} className={css.img} />
      <div className={css.title}>{title}</div>
      <FaArrowAltCircleRight className={css.icon} size={'4rem'} />
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
