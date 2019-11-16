import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionSimplePost.module.scss'
import SectionGallery from '../SectionGallery/SectionGallery'
import Layout from '../Layout/Layout'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { PAGE_WORKS } from '../../constants/ROUTES'

const SectionSimplePost = ({ title, text, galleryData, date, parentId, withUrl, ...props }) => (
  <div className={css.container}>
    <Layout>
      <div className={css.date}>{moment(date).format('LL')}</div>
      <Link to={PAGE_WORKS + parentId}><h3 className={css.title}>{title}</h3></Link>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
    </Layout>
    { galleryData && <SectionGallery {...galleryData} />}
  </div>
)
SectionSimplePost.propTypes = {
  id: PropTypes.number,
  galleryData: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  date: PropTypes.any,
  parentId: PropTypes.number,
  withUrl: PropTypes.bool
}

export default React.memo(SectionSimplePost)
