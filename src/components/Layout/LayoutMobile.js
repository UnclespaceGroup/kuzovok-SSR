import React from 'react'
import PropTypes from 'prop-types'
import css from './LayoutMobile.module.scss'
import cn from 'classnames'

const LayoutMobile = ({ children, className, width }) => (
  <div className={cn(css.container, className)} style={width && { width: `${width / 10}rem` }}>
    {children}
  </div>
)
LayoutMobile.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  className: PropTypes.string
}

export default React.memo(LayoutMobile)
