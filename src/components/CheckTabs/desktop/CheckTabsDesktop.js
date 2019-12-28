import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/CheckTabs/desktop/CheckTabsDesktop.module.scss'
import _ from 'lodash'

const CheckTabsDesktop = ({ items, activeTabIndex }) => (
  <div>
    {
      _.map(items, ({ title, onClick, active }, key) => (
        <div
          key={key}
          className={activeTabIndex === key ? css.tabActive : css.tab}
          onClick={onClick}
        >
          {title}
        </div>
      ))
    }
  </div>
)
CheckTabsDesktop.propTypes = {
  items: PropTypes.array,
  activeTabIndex: PropTypes.number
}
export default React.memo(CheckTabsDesktop)
