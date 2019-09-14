import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogImage.module.scss'
import { Link } from 'react-router-dom'
import BgImage from '../BgImage/BgImage'

const CardCatalogImage = ({ img, title, text, to, className }) => (
  <Link to={to} className={cn(css.container, className)}>
    <BgImage img={img} className={css.img} />
    <div className={css.content}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </div>
  </Link>
)
CardCatalogImage.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string
}

export default React.memo(CardCatalogImage)
