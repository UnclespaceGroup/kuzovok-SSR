import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/FieldSelect/mobile/FieldSelectMobile.module.scss'

import Select from 'react-select'

const FieldSelectMobile = ({ options, onChange, placeholder }) => {
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
FieldSelectMobile.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.any
}
export default React.memo(FieldSelectMobile)
