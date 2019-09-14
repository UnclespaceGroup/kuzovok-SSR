import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTopBanner.module.scss'
import Layout from '../Layout/Layout'
import BgImage from '../BgImage/BgImage'

const SectionTopBanner = ({ img, title, text, children, sideBlock }) => (
  <BgImage img={img}>
    <div className={css.container}>
      <div className={css.side}>{sideBlock}</div>
      <Layout className={css.content}>
        <h1 className={css.title}>{title}</h1>
        <div className={css.text}>{text}</div>
        <div>{children}</div>
      </Layout>
    </div>
  </BgImage>
)
SectionTopBanner.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  sideBlock: PropTypes.node,
  img: PropTypes.node
}

export default React.memo(SectionTopBanner)
