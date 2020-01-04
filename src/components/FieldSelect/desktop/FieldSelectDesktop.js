import React from 'react'
import PropTypes from 'prop-types'
import css from './FieldSelectDesktop.module.scss'

import Select from 'react-select'

const FieldSelectDesktop = ({ options, onChange, placeholder }) => {
  return (
    <Select
      className={css.select}
      classNamePrefix={'select'}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
FieldSelectDesktop.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.any
}
export default React.memo(FieldSelectDesktop)
