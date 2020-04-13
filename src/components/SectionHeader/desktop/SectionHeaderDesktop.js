import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './SectionHeaderDesktop.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'
import logo from 'static/logo/colored-logo-text.png'

const SectionHeaderDesktop = ({ setOpen, open, menuItems = [], black, phone }) => (
  <div className={cn(css.wrapper, { [css.black]: black })}>
    <div className={css.container}>
      <div className={css.block}>
        {
          open
            ? <MdClose className={css.search} onClick={() => setOpen(!open)} color={'white'} size={'2.4rem'} />
            : <MdMenu onClick={() => setOpen(!open)} className={css.search} color={'white'} size={'2.4rem'} />
        }
        <Link to={'/'} >
          <img className={css.logoImg} src={logo} alt={'Кузовок'} />
        </Link>
      </div>
      <div className={css.block}>
        {
          menuItems.map(({ title, href }, key) => (
            <NavLink
              to={href}
              className={css.item}
              key={key}
              activeClassName={css.itemActive}
            >{title}</NavLink>
          ))
        }
        <div className={cn(css.item, css.phone)}><a href={`tel:${phone}`}>{phone}</a></div>
        {/* <MdSearch className={css.search} color={'white'} size={'2.4rem'} /> */}
      </div>
    </div>
  </div>
)
SectionHeaderDesktop.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  menuItems: PropTypes.array,
  black: PropTypes.bool,
  phone: PropTypes.string
}

export default React.memo(SectionHeaderDesktop)
