import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTabs.module.scss'
import cn from 'classnames'
import _ from 'lodash'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import Layout from '../../Layout/Layout'

const SectionTabs = ({ items = [], pending }) => (
  <div className={cn(css.container, { [css.pending]: pending })}>
    <Layout className={css.wrapper}>
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
    </Layout>
  </div>
)
SectionTabs.propTypes = {
  items: PropTypes.array,
  pending: PropTypes.bool
}

export default compose(
  withRouter,
  React.memo
)(SectionTabs)
