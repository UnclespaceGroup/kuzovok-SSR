import React from 'react'
import PropTypes from 'prop-types'
import css from './Banner.module.scss'
import BgImage from '../BgImage/BgImage'
import Layout from '../Layout/Layout'

const Banner = ({ title, text, img }) => (
  <BgImage img={img}>
    <div className={css.container}>
      <Layout>
        <h1 className={css.title}>{title}</h1>
        <div className={css.text}>{text}</div>
      </Layout>
    </div>
  </BgImage>
)
Banner.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  img: PropTypes.string
}

export default React.memo(Banner)
