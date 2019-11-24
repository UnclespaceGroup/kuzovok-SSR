import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTitleMobile.module.scss'

const SectionTitleMobile = ({ title, count }) => (
  <div className={css.container}>
    <h2>{title}</h2><span className={css.count}>{count}</span>
  </div>
)
SectionTitleMobile.propTypes = {
  count: PropTypes.node,
  title: PropTypes.node
}

export default React.memo(SectionTitleMobile)
