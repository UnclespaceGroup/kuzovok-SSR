import React from 'react'
import PropTypes from 'prop-types'
import css from './Icon.module.scss'
import * as IconMd from 'react-icons/md'

const icons = {
  info: IconMd.MdInfo,
  count: ({ count }) => IconMd[`MdFilter${count.toString()}`]
}

const Icon = ({ name }) => {
  if (typeof name === 'string') {
    const IconComponent = icons[name]
    return (
      <IconComponent className={css.icon} />
    )
  } else if (typeof name === 'object') {
    const IconComponent = (typeof icons[name.title] === 'function') ? icons[name.title](name.params) : 'div'
    if (!IconComponent) return <span />
    return (
      <IconComponent className={css.icon} />
    )
  } else {
    return name
  }
}
Icon.propTypes = {
  name: PropTypes.any
}

export default React.memo(Icon)
