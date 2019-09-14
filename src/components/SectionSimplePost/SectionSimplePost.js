import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionSimplePost.module.scss'
import SectionGallery from '../SectionGallery/SectionGallery'
import Layout from '../Layout/Layout'

const SectionSimplePost = ({ title, text, galleryData }) => (
  <Layout className={css.container}>
    <h3 className={css.title}>{title}</h3>
    <div className={css.text}>{text}</div>
    { galleryData && <div>
      <SectionGallery {...galleryData} />
    </div>
    }
  </Layout>
)
SectionSimplePost.propTypes = {
  galleryData: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node
}

export default React.memo(SectionSimplePost)
