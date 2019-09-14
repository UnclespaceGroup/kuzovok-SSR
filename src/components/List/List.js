import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
// import css from './List.module.scss'

const List = ({ items, children }) => (
  <div>
    {
      _.map(items, (item, key) => (
        React.cloneElement(children, { key, ...item })
      ))
    }
  </div>
)
List.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array
}

export default React.memo(List)
