import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './RowCards.module.scss'

const RowCards = ({ children, items, className }) => (
  <div className={cn(css.container, className)}>
    {
      _.map(items, (item, key) => (
        React.cloneElement(children, { key: key, className: css.item, ...item })
      ))
    }
  </div>
)
RowCards.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  items: PropTypes.array
}

export default React.memo(RowCards)
