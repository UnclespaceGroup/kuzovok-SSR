import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionSideMenu.module.scss'
import { Link } from 'react-router-dom'

const SectionSideMenu = ({ icons, bottomIcon }) => (
  <div className={css.container}>
    <div />
    <div className={css.center}>
      {
        _.map(icons, (item, key) => (
          <Link to={item.to} className={css.item} key={key}>
            {item.icon}
          </Link>
        ))
      }
    </div>
    <Link to={bottomIcon.to} className={css.item}>
      {bottomIcon.icon}
    </Link>
  </div>
)
SectionSideMenu.propTypes = {
  icons: PropTypes.array,
  bottomIcon: PropTypes.object
}

export default React.memo(SectionSideMenu)
