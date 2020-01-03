import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardWorkItemMobile.module.scss'
import { Link } from 'react-router-dom'
import { getDate } from '../../../utils/getNameByValue'

const CardWorkItemMobile = ({ id, url = '/', img, title, className, subtitle = 'В работе', status = 0, date }) => (
  <div className={cn(css.container, className)}>
    <div>
      <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={cn(css.subtitle, css[`status-${status}`])} dangerouslySetInnerHTML={{ __html: subtitle }} />
      <div className={css.title}>{title}</div>
    </div>
    <div className={css.footer}>
      <Link className={css.link} to={url + id} >Подробнее</Link>
      <div className={css.date}>{getDate(date)}</div>
    </div>
  </div>
)
CardWorkItemMobile.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.node,
  date: PropTypes.node,
  url: PropTypes.string,
  id: PropTypes.any,
  status: PropTypes.any
}

export default React.memo(CardWorkItemMobile)
