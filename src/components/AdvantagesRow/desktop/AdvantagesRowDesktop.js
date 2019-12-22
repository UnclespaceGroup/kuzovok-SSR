import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Layout from '../../Layout/Layout'
import css from './AdvantagesRowDesktop.module.scss'

const AdvantagesRowDesktop = ({ items }) => (
  <Layout className={css.container}>
    {
      _.map(items, ({ img, title, text }, key) => (
        <div key={key} className={css.item}>
          <div className={css.icon} style={{ backgroundImage: `url(${img})` }} />
          <div className={css.title}>{title}</div>
          <div className={css.text}>{text}</div>
        </div>
      ))
    }
  </Layout>
)
AdvantagesRowDesktop.propTypes = {
  items: PropTypes.array
}
export default React.memo(AdvantagesRowDesktop)
