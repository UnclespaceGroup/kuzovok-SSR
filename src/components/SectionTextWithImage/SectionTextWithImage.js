import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTextWithImage.module.scss'
import Layout from '../Layout/Layout'

const SectionTextWithImage = ({ title, text, img }) => (
  <div className={css.container}>
    <Layout>
      <div className={css.row}>
        <div className={css.col}>
          <div className={css.title}>{title}</div>
          <div className={css.text}>{text}</div>
        </div>
        <div className={css.col}>
          <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
        </div>
      </div>
    </Layout>
  </div>
)
SectionTextWithImage.propTypes = {
  title: PropTypes.node,
  img: PropTypes.node,
  text: PropTypes.node
}

export default React.memo(SectionTextWithImage)
