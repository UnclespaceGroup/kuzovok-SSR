import React from 'react'
import PropTypes from 'prop-types'
import css from './FieldInput.module.scss'

const FieldInput = ({ input, ...props }) => (
  <div className={css.container}>
    <input {...input} {...props} />
  </div>
)
FieldInput.propTypes = {
  input: PropTypes.any
}

export default React.memo(FieldInput)
