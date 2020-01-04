import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTitle.module.scss'

const SectionTitle = ({ title, count, beforeTitleBlock }) => (
  <div className={css.container}>
    <div>
      <h2>{title}</h2><span className={css.count}>{count}</span>
    </div>
    {beforeTitleBlock && <span className={css.beforeTitleBlock}>{beforeTitleBlock}</span>}
  </div>
)
SectionTitle.propTypes = {
  count: PropTypes.node,
  title: PropTypes.node,
  beforeTitleBlock: PropTypes.node
}

export default React.memo(SectionTitle)
