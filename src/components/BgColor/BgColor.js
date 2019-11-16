import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './BgColor.module.scss'

const BgColor = ({ children, color }) => (
  <div className={cn(css.container, css[color])}>
    {children}
  </div>
)
BgColor.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}

export default React.memo(BgColor)
