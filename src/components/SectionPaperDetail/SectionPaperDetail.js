import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionPaperDetail.module.scss'

const SectionPaperDetail = ({ children }) => (
  <div className={css.container}>
    {children}
  </div>
)
SectionPaperDetail.propTypes = {
  children: PropTypes.node
}

export default React.memo(SectionPaperDetail)
