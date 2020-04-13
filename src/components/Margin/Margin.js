import React from 'react'
import PropTypes from 'prop-types'

const Margin = ({ value }) => (
  <div style={{ marginTop: `${value / 10}rem` }} />
)
Margin.propTypes = {
  value: PropTypes.node
}

export default React.memo(Margin)
