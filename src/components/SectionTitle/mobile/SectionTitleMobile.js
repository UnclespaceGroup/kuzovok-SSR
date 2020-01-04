import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from './SectionTitleMobile.module.scss'
import { FiFilter } from 'react-icons/fi'

const SectionTitleMobile = ({ title, count, beforeTitleBlock }) => {
  const [ isOpenFilter, setIsOpenFilter ] = useState()
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>{title}<span className={css.count}>{count}</span></h2>
        { beforeTitleBlock && <div className={isOpenFilter ? css.filterOpen : css.filter} onClick={() => setIsOpenFilter(!isOpenFilter)}>
          <FiFilter />
        </div>}
      </div>
      {(isOpenFilter && beforeTitleBlock) && <div className={css.beforeTitleBlock}>{beforeTitleBlock}</div>}
    </div>
  )
}
SectionTitleMobile.propTypes = {
  count: PropTypes.node,
  title: PropTypes.node,
  beforeTitleBlock: PropTypes.node
}

export default React.memo(SectionTitleMobile)
