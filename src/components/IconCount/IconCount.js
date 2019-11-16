import React from 'react'
import PropTypes from 'prop-types'
import css from './IconCount.module.scss'
import TextIcon from '../TextIcon/TextIcon'
import { normalizeCount } from '../../utils/normalize'

const IconCount = ({ count, texts = [] }) => (
  <div className={css.container}>
    <TextIcon
      icon={{
        title: 'count',
        params: { count: (count < 10) ? count : '9Plus' }
      }}
    >
      Всего {count} {normalizeCount(count, texts)}
    </TextIcon>
  </div>
)
IconCount.propTypes = {
  count: PropTypes.number,
  texts: PropTypes.array
}

export default React.memo(IconCount)
