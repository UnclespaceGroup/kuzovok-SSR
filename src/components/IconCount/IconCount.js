import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './IconCount.module.scss'
import { normalizeCount } from '../../utils/normalize'
import IconWrapper from '../IconWrapper/IconWrapper'

const IconCount = ({ count, texts = [], className }) => (
  <div className={cn(css.container, className)}>
    <IconWrapper
      icon={{
        title: 'count',
        params: { count: (count < 10) ? count : '9Plus' }
      }}
    >
      Всего {count} {normalizeCount(count, texts)}
    </IconWrapper>
  </div>
)
IconCount.propTypes = {
  count: PropTypes.number,
  texts: PropTypes.array,
  className: PropTypes.string
}

export default React.memo(IconCount)
