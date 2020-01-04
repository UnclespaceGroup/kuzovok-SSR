import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from 'components/TagStatus/TagStatus.module.scss'
import { getStatusByCode } from 'utils/getNameByValue'

const TagStatus = ({ className, status }) => console.log(status) || (
  <div className={cn(css.wrapper, css[`status-${status}`], className)}>{getStatusByCode(status)}</div>
)
TagStatus.propTypes = {
  className: PropTypes.string,
  status: PropTypes.any
}
export default React.memo(TagStatus)
