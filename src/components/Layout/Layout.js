import React from 'react'
import PropTypes from 'prop-types'
import css from './Layout.module.scss'
import cn from 'classnames'

const Layout = ({ children, className, width, withAside }) => (
  <div className={cn(css.container, className, { [ css.withAside ]: withAside })} style={width && { width: `${width / 10}rem` }}>
    {children}
  </div>
)
Layout.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  className: PropTypes.string,
  withAside: PropTypes.bool
}

export default React.memo(Layout)
