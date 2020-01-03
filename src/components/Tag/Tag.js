import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './Tag.scss'

const Tag = ({ className, children, color, status }) => (
  <div className={cn(css.wrapper, css[`status-${status}`], className)}>{children}</div>
)
Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  status: PropTypes.any
}
export default React.memo(Tag)
