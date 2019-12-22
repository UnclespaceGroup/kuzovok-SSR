import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardCatalogImage.module.scss'
import { Link } from 'react-router-dom'
import BgImage from 'components/BgImage/BgImage'
import { FaArrowRight } from 'react-icons/fa'

const CardCatalogImage = ({ banner, title, annotation, to, className }) => (
  <Link to={to} className={cn(css.container, className)}>
    <BgImage img={banner} className={css.img} />
    <div className={css.content}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{annotation}</div>
    </div>
    <div className={css.icon} >
      <FaArrowRight />
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
