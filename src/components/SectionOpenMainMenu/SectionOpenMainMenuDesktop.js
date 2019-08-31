import React from 'react'
// import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuDesktop.module.scss'

const SectionOpenMainMenuDesktop = () => (
  <div className={css.container}>
    <div className={css.columns} />
  </div>
)
SectionOpenMainMenuDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionOpenMainMenuDesktop)
