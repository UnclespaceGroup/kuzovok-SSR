import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from 'components/AdvantagesRow/mobile/AdvantagesRowMobile.module.scss'
import LayoutMobile from 'components/Layout/LayoutMobile'

const AdvantagesRowMobile = ({ items }) => (
  <LayoutMobile className={css.container}>
    {
      _.map(items, ({ img, title, text }, key) => (
        <div key={key} className={css.item}>
          <div className={css.icon} style={{ backgroundImage: `url(${img})` }} />
          <div className={css.title}>{title}</div>
          <div className={css.text}>{text}</div>
        </div>
      ))
    }
  </LayoutMobile>
)
AdvantagesRowMobile.propTypes = {
  items: PropTypes.array
}
export default React.memo(AdvantagesRowMobile)
