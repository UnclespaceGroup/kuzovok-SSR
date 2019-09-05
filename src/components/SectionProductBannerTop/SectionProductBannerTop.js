import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionProductBannerTop.module.scss'
import Layout from '../Layout/Layout'

const SectionProductBannerTop = ({ title }) => (
  <div className={css.container}>
    <Layout>
      <div className={css.title}>{title}</div>
    </Layout>
  </div>
)
SectionProductBannerTop.propTypes = {
  title: PropTypes.node
}

export default React.memo(SectionProductBannerTop)
