import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionHeaderDesktop.module.scss'
import { Link } from 'react-router-dom'
import cn from 'classnames'

const items = [
  // {
  //   title: 'Отчеты', href: ''
  // },
  // {
  //   title: 'В работе', href: ''
  // }
]

const SectionHeaderDesktop = ({ setOpen, open }) => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <div className={css.block}>
        <div className={open ? css.burger__open : css.burger} onClick={() => setOpen(!open)} />
      </div>
      <div className={css.block}>
        {
          items.map(({ title, href }, key) => (
            <Link to={href} className={css.item} key={key} >{title}</Link>
          ))
        }
        {/* <a href={'tel:89042222222'} className={cn(css.item, css.phone)}>8(904) 555 35 36</a> */}
        <div className={cn(css.search, css.item)} />
      </div>
    </div>
  </div>
)
SectionHeaderDesktop.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool
}

export default React.memo(SectionHeaderDesktop)
