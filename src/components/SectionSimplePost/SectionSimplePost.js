import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import css from './SectionSimplePost.module.scss'
import SectionGallery from '../SectionGallery/SectionGallery'
import Layout from '../Layout/Layout'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { PAGE_WORKS } from '../../constants/ROUTES'

const SectionSimplePost = ({ title, text, galleryData, date, parentId, annotation, withUrl, number = 12 }) => {
  const [ showAllPhotos, setShowAllPhotos ] = useState(false)
  useMemo(() => {
    setShowAllPhotos(galleryData?.photos?.length <= 2)
  }, [galleryData])
  return (
    <div >
      <Layout className={css.container}>
        <div className={css.flex}>
          <div className={css.colorBlock}>
            <Link to={PAGE_WORKS + parentId}><h3 className={css.title}>{title}</h3></Link>
            <div className={css.annotation}>{annotation}</div>
          </div>
          <div className={css.side}>
            <div className={css.date}>{moment(date).format('LL')}</div>
            <div className={css.number}>Дней в ремонте <span>{number}</span></div>
          </div>
        </div>
        { galleryData && <SectionGallery className={css.gallery}
          {...galleryData}
          photos={showAllPhotos ? galleryData?.photos : galleryData?.photos.slice(0, 2)}
        />}
        { !showAllPhotos && <div className={css.btn} onClick={() => { setShowAllPhotos(true) }}>Показать ещё</div>}
        <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
      </Layout>
    </div>
  )
}
SectionSimplePost.propTypes = {
  id: PropTypes.number,
  galleryData: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  date: PropTypes.any,
  parentId: PropTypes.number,
  withUrl: PropTypes.bool,
  annotation: PropTypes.node,
  number: PropTypes.node
}

export default React.memo(SectionSimplePost)
