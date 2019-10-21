import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionSimplePost.module.scss'
import SectionGallery from '../SectionGallery/SectionGallery'
import Layout from '../Layout/Layout'
import moment from 'moment'

const SectionSimplePost = ({ title, text, galleryData, date, ...props }) => console.log(props) || (
  <div className={css.container}>
    <Layout>
      <h3 className={css.title}>{title}</h3>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      <div>{moment(date).format('LL')}</div>
    </Layout>
    { galleryData && <SectionGallery {...galleryData} />}
  </div>
)
SectionSimplePost.propTypes = {
  galleryData: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node
}

export default React.memo(SectionSimplePost)
