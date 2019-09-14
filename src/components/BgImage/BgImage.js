import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './BgImage.module.scss'

const BgImage = ({ img, children, className }) => (
  <div className={cn(css.container, className)} style={{ backgroundImage: `url(${img})` }}>
    {children}
  </div>
)
BgImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  img: PropTypes.node
}

export default React.memo(BgImage)
