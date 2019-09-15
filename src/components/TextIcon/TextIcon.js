import React from 'react'
import PropTypes from 'prop-types'
import css from './TextIcon.module.scss'
import Button from '../Button/Button'

const TextIcon = ({ children, icon, to }) => (
  <Button className={css.wrapper} to={to} classname={'light'}>
    <div className={css.container}>
      {icon}
      {children}
    </div>
  </Button>
)
TextIcon.propTypes = {
  children: PropTypes.node,
  to: PropTypes.node,
  icon: PropTypes.node
}

export default React.memo(TextIcon)
