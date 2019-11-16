import React from 'react'
import PropTypes from 'prop-types'
import css from './RowSizeble.module.scss'
import cn from 'classnames'
import _ from 'lodash'

const RowSizeble = ({ children, items, className }) => {
  let counter = 0
  return (
    <div className={cn(css.container, className)}>
      {
        _.map(items, (item, key) => {
          counter += +item.size
          return (
            React.cloneElement(children, { key: key, className: cn(css.item, css[`size_${item.size}`], { [css.last]: counter % 4 === 0 }), ...item })
          )
        }
        )
      }
    </div>
  )
}
RowSizeble.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  className: PropTypes.string
}

export default React.memo(RowSizeble)
