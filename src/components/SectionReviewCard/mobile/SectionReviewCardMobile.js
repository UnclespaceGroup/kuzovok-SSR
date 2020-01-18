import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionGalleryVerticalMobile from '../../SectionGalleryVertical/mobile/SectionGalleryVerticalMobile'
import css from './SectionReviewCardMobile.module.scss'
import cn from 'classnames'
import moment from 'moment'
import Wysiwyg from '../../Wysiwyg/desktop/Wysiwyg'

const SectionReviewCardMobile = ({ title, text, galleryData, date, annotation, withUrl, number = 12, theme = 'white' }) => (
  <div className={cn(css.container, css[theme])}>
    <LayoutMobile>
      <div className={css.header}>
        <div className={css.title}>{title}</div>
        <div className={css.date}>{moment(date).format('LL')}</div>
      </div>
      <div className={css.row}>
        <div className={css.content}>
          <div>
            <div className={css.annotation}>{annotation}</div>
          </div>
          <div className={css.number}>День в ремонте <span>{number}</span></div>
        </div>
        <div className={css.aside}>
          <SectionGalleryVerticalMobile {...galleryData} />
        </div>
      </div>
      <Wysiwyg>{text}</Wysiwyg>
    </LayoutMobile>
  </div>
)
SectionReviewCardMobile.propTypes = {
  galleryData: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  date: PropTypes.any,
  withUrl: PropTypes.bool,
  annotation: PropTypes.node,
  number: PropTypes.node,
  theme: PropTypes.string
}

export default React.memo(SectionReviewCardMobile)
