import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviewCard.module.scss'
import cn from 'classnames'
import SectionGalleryVertical from 'components/SectionGalleryVertical/desktop/SectionGalleryVertical'
import moment from 'moment'

const SectionReviewCard = ({ title, galleryData, date, annotation, theme = 'white' }) => (
  <div className={cn(css.container, css[theme])}>
    <div className={css.row}>
      <div className={css.content}>
        <div className={css.header}>
          <div className={css.title}>{title}</div>
          <div className={css.date}>{moment(date).format('LL')}</div>
        </div>
        <div className={css.annotation}>{annotation}</div>
      </div>
      <div className={css.aside}>
        <SectionGalleryVertical {...galleryData} />
      </div>
    </div>
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
