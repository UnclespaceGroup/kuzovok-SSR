import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardWorkItem.module.scss'
import { Link } from 'react-router-dom'
import { getDate } from '../../../utils/getNameByValue'

const CardWorkItem = ({ id, url = '/', img, title, annotation, className, subtitle = 'Ремонт', date }) => (
  <div className={cn(css.container, className)}>
    <div>
      <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={css.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
      <div className={css.title}>{title}</div>
      <div className={css.text}>{annotation}</div>

    </div>
    <div className={css.footer}>
      <div className={css.date}>{getDate(date)}</div>
      <Link className={css.link} to={url + id} >Подробнее</Link>
    </div>
  </div>
)
CardWorkItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  annotation: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.node,
  date: PropTypes.node,
  url: PropTypes.string,
  id: PropTypes.any
}

export default React.memo(CardWorkItem)
