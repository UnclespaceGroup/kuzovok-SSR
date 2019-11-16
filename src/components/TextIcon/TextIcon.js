import React from 'react'
import PropTypes from 'prop-types'
import css from './TextIcon.module.scss'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

const TextIcon = ({ children, icon, to, visible = true }) => {
  if (!visible) return <span />
  return (
    <Button className={css.wrapper} to={to} classname={'light'}>
      <div className={css.container}>
        <Icon name={icon} />
        {children}
      </div>
    </Button>
  )
}
TextIcon.propTypes = {
  children: PropTypes.node,
  to: PropTypes.node,
  icon: PropTypes.any,
  visible: PropTypes.any
}

export default React.memo(TextIcon)
