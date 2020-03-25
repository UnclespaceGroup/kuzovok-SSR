import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import css from './SectionReviewCardMobile.module.scss'
import moment from 'moment'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'

const SectionReviewCardMobile = ({ title, text, date, parentTitle }) => (
  <div className={css.container}>
    <LayoutMobile>
      <div className={css.header}>
        <div className={css.title}>{title}</div>
        <div className={css.parentTitle}>{parentTitle}</div>
        <div className={css.date}>{moment(date).format('LL')}</div>
      </div>
      <WysiwygMobile>{text}</WysiwygMobile>
    </LayoutMobile>
  </div>
)
SectionReviewCardMobile.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  date: PropTypes.any,
  parentTitle: PropTypes.string
}

export default React.memo(SectionReviewCardMobile)
