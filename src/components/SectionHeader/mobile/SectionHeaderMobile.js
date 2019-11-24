import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './SectionHeaderMobile.module.scss'
import { Link } from 'react-router-dom'
import { MdSearch, MdMenu, MdClose } from 'react-icons/md'
import { MAIN_PHONE } from '../../../constants/contacts'

const SectionHeaderMobile = ({ setOpen, open, menuItems = [] }) => (
  <div className={css.wrapper}>
    <div className={css.container}>
      {
        open
          ? <MdClose className={css.search} onClick={() => setOpen(!open)} color={'white'} size={'2.4rem'} />
          : <MdMenu onClick={() => setOpen(!open)} className={css.search} color={'white'} size={'2.4rem'} />
      }
      <Link to={'/'} className={css.logo} >КузовОК</Link>
      <div className={cn(css.phone)}>{MAIN_PHONE}</div>
      <MdSearch className={css.search} color={'white'} size={'2.4rem'} />
    </div>
  </div>
)
SectionHeaderMobile.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  menuItems: PropTypes.array
}

export default React.memo(SectionHeaderMobile)
