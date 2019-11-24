import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './SectionHeaderDesktop.module.scss'
import { Link } from 'react-router-dom'
import { MdSearch, MdMenu, MdClose } from 'react-icons/md'
import { MAIN_PHONE } from '../../../constants/contacts'

const SectionHeaderDesktop = ({ setOpen, open, menuItems = [] }) => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <div className={css.block}>
        {
          open
            ? <MdClose className={css.search} onClick={() => setOpen(!open)} color={'white'} size={'2.4rem'} />
            : <MdMenu onClick={() => setOpen(!open)} className={css.search} color={'white'} size={'2.4rem'} />
        }
        <Link to={'/'} className={css.logo} >КузовОК</Link>
      </div>
      <div className={css.block}>
        {
          menuItems.map(({ title, href }, key) => (
            <Link to={href} className={css.item} key={key} >{title}</Link>
          ))
        }
        <div className={cn(css.item, css.phone)}>{MAIN_PHONE}</div>
        <MdSearch className={css.search} color={'white'} size={'2.4rem'} />
      </div>
    </div>
  </div>
)
SectionHeaderDesktop.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  menuItems: PropTypes.array
}

export default React.memo(SectionHeaderDesktop)
