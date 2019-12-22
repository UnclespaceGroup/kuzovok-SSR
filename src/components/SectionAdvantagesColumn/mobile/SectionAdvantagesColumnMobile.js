import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionAdvantagesColumnMobile.module.scss'

const SectionAdvantagesColumnMobile = ({ items }) => (
  <div className={css.container}>
    {
      _.map(items, (item, key) => (
        <div className={css.block} key={key}>
          <div className={css.title}>
            <div className={css.icon} style={{ backgroundImage: `url(${item.img})` }} />
            {item.title}
          </div>
          <div className={css.text}>{item.text}</div>
        </div>
      ))
    }
  </div>
)
SectionAdvantagesColumnMobile.propTypes = {
  items: PropTypes.array
}

export default React.memo(SectionAdvantagesColumnMobile)
