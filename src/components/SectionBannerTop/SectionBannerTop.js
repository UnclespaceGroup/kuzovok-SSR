import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionBannerTop.module.scss'
import Layout from '../Layout/Layout'

const SectionBannerTop = ({ img, title, text }) => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>
      </div>
    </Layout>
  </div>
)
SectionBannerTop.propTypes = {
  img: PropTypes.string,
  text: PropTypes.node,
  title: PropTypes.node
}

export default React.memo(SectionBannerTop)
