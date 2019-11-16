import React from 'react'
import PropTypes from 'prop-types'
import css from './TextBlock.module.scss'

const TextBlock = ({ text, width }) => (
  <div className={css.container} style={{ width }} dangerouslySetInnerHTML={{ __html: text }} />
)
TextBlock.propTypes = {
  text: PropTypes.node,
  width: PropTypes.string
}

export default React.memo(TextBlock)
