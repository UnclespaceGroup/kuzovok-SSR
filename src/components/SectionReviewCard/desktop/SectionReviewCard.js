import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviewCard.module.scss'
import moment from 'moment'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'

const SectionReviewCard = ({ title, date, parentTitle, text }) => (
  <div className={css.container}>
    <div className={css.title}>{title}</div>
    <div className={css.parentTitle}>{parentTitle}</div>
    <div className={css.date}>{moment(date).format('LL')}</div>
    <Wysiwyg>{text}</Wysiwyg>
  </div>
)
SectionReviewCard.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  date: PropTypes.any,
  parentTitle: PropTypes.string
}

export default React.memo(SectionReviewCard)
