import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import css from './SectionReviewCardMobile.module.scss'
import cn from 'classnames'
import moment from 'moment'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'

const SectionReviewCardMobile = ({ title, text, date, theme = 'white' }) => (
  <div className={cn(css.container, css[theme])}>
    <LayoutMobile>
      <div className={css.header}>
        <div className={css.title}>{title}</div>
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
  theme: PropTypes.string
}

export default React.memo(SectionReviewCardMobile)
