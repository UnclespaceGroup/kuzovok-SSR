import React from 'react'
import PropTypes from 'prop-types'
import css from './Content.module.scss'

const Content = ({ children, width }) => (
  <div className={css.container} style={{ width }}>
    {children}
  </div>
)
Content.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
}

export default React.memo(Content)
