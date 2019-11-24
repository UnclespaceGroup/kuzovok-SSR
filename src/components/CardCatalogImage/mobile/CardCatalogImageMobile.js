import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Button from '../../Button/Button'
import css from './CardCatalogImageMobile.module.scss'
import BgImage from '../../BgImage/BgImage'

const CardCatalogImageMobile = ({ banner, title, annotation, to, className }) => (
  <div className={cn(css.container, className)}>
    <BgImage img={banner} className={css.img} />
    <div className={css.content}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{annotation}</div>
      <Button className={css.btn} to={to}>Перейти</Button>
    </div>
  </div>
)
CardCatalogImageMobile.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.node,
  annotation: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string
}

export default React.memo(CardCatalogImageMobile)
