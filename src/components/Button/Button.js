import React from 'react'
import PropTypes from 'prop-types'
import css from './Button.module.scss'
import { Link } from 'react-router-dom'
import cn from 'classnames'

const Button = ({ children, to, onClick, href, className, classname, withIcon }) => {
  const _className = cn({ [css.withIcon]: withIcon }, css[classname], css.container, className)
  return (
    to
      ? <Link to={to} className={_className}>{children}</Link>
      : <a href={href} onClick={onClick} className={_className} >{children}</a>
  )
}
Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
  classname: PropTypes.string,
  withIcon: PropTypes.bool
}

export default React.memo(Button)
