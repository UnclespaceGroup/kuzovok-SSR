import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './SectionHeaderDesktop.module.scss'
import { Link } from 'react-router-dom'
import { MdSearch, MdMenu, MdClose } from 'react-icons/md'

const items = [
  // {
  //   title: 'Услуги', href: ''
  // },
  // {
  //   title: 'Сейчас в работе', href: ''
  // },
  // {
  //   title: 'О нас', href: ''
  // }
]

const SectionHeaderDesktop = ({ setOpen, open }) => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <div className={css.block}>
        {
          open
            ? <MdClose className={css.search} onClick={() => setOpen(!open)} color={'white'} size={'2.4rem'} />
            : <MdMenu onClick={() => setOpen(!open)} className={css.search} color={'white'} size={'2.4rem'} />
        }
      </div>
      <div className={css.block}>
        {
          items.map(({ title, href }, key) => (
            <Link to={href} className={css.item} key={key} >{title}</Link>
          ))
        }
      </div>
      <div className={css.block}>
        <a href={'tel:89042222222'} className={cn(css.item, css.phone)}>8(904) 555 35 36</a>
        <MdSearch className={css.search} color={'white'} size={'2.4rem'} />
      </div>
    </div>
  </div>
)
SectionHeaderDesktop.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool
}

export default React.memo(SectionHeaderDesktop)
