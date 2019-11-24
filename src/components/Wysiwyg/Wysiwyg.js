import React from 'react'
import PropTypes from 'prop-types'
import css from './Wysiwyg.module.scss'

const Wysiwyg = ({ children }) => (
  <div className={css.container} dangerouslySetInnerHTML={{ __html: children }} />
)
Wysiwyg.propTypes = {
  children: PropTypes.node
}

export default React.memo(Wysiwyg)
