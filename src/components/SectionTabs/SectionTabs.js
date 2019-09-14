import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTabs.module.scss'
import _ from 'lodash'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

const SectionTabs = ({ items }) => (
  <div className={css.container}>
    {
      _.map(items, (item, key) => (
        <NavLink
          key={key}
          className={css.item}
          activeClassName={css.item__active}
          exact
          to={{
            pathname: item.to,
            state: { noScroll: true }
          }}
        >{item.title}</NavLink>
      ))
    }
  </div>
)
SectionTabs.propTypes = {
  items: PropTypes.array
}

export default compose(
  withRouter,
  React.memo
)(SectionTabs)
