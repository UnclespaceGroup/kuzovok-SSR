import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviewCard.module.scss'
import cn from 'classnames'
import SectionGalleryVertical from '../SectionGalleryVertical/SectionGalleryVertical'
import moment from 'moment'
import Wysiwyg from '../Wysiwyg/Wysiwyg'
import Layout from '../Layout/Layout'

const SectionReviewCard = ({ title, text, galleryData, date, parentId, annotation, withUrl, number = 12, theme = 'white' }) => (
  <div className={cn(css.container, css[theme])}>
    <Layout>
      <div className={css.header}>
        <div className={css.title}>{title}</div>
        <div className={css.date}>{moment(date).format('LL')}</div>
      </div>
      <div className={css.row}>
        <div className={css.content}>
          <div>
            <div className={css.annotation}>{annotation}</div>
            <Wysiwyg>{text}</Wysiwyg>
          </div>
          <div className={css.number}>День в ремонте <span>{number}</span></div>
        </div>
        <div className={css.aside}>
          <SectionGalleryVertical {...galleryData} />
        </div>
      </div>
    </Layout>
  </div>
)
SectionReviewCard.propTypes = {
  galleryData: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  date: PropTypes.any,
  parentId: PropTypes.number,
  withUrl: PropTypes.bool,
  annotation: PropTypes.node,
  number: PropTypes.node,
  theme: PropTypes.string
}

export default React.memo(SectionReviewCard)
