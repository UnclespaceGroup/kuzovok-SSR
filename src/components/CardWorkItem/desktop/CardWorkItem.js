import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './CardWorkItem.module.scss'
import { Link } from 'react-router-dom'
import { getDate, getStatusByCode } from 'utils/getNameByValue'

const CardWorkItem = ({ to = '/', img, title, annotation, className, status = 0, date }) => {
  return (
    <div className={cn(css.container, className)}>
      <div>
        <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
        <div className={cn(css.subtitle, css[`status-${status}`])} dangerouslySetInnerHTML={{ __html: getStatusByCode(status) }} />
        <div className={css.title}>{title}</div>
        <div className={css.text}>{annotation}</div>

      </div>
      <div className={css.footer}>
        <div className={css.date}>{getDate(date)}</div>
        <Link className={css.link} to={to} >Подробнее</Link>
      </div>
    </div>
  )
}
CardWorkItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  annotation: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.node,
  to: PropTypes.string,
  status: PropTypes.any
}

export default React.memo(CardWorkItem)
