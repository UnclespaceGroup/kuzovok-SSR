import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogImage.module.scss'
import { Link } from 'react-router-dom'
import BgImage from '../../BgImage/BgImage'

const CardCatalogImage = ({ banner, title, annotation, to, className }) => (
  <Link to={to} className={cn(css.container, className)}>
    <BgImage img={banner} className={css.img} />
    <div className={css.content}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{annotation}</div>
    </div>
  </Link>
)
CardCatalogImage.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.node,
  annotation: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string
}

export default React.memo(CardCatalogImage)
