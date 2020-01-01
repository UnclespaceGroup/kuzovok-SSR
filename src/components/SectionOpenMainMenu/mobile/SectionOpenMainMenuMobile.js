import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuMobile.module.scss'
import { Link } from 'react-router-dom'
import { menu } from 'constants/MAIN_MENU'
import LayoutMobile from '../../Layout/LayoutMobile'
import Padding from 'components/Padding/Padding'
import { MAIN_PHONE } from 'constants/contacts'
import logo from 'static/logo/colored-logo-inverse-resized.png'

const SectionOpenMainMenuMobile = ({ openMenu }) => {
  return (
  <>
    <div className={css.back} onClick={() => { openMenu(false) }} />
    <div className={css.container}>
      <LayoutMobile >
        <div className={css.logoIcon} style={{ backgroundImage: `url(${logo})` }} />
        <div className={css.block}>
          <Link to={'/'} className={css.mainLink} >Главная</Link>
          {
            _.map(menu.mainItems, (item, key) => (
              <Link to={item.to} className={css.mainLink} key={key}>{item.title}</Link>
            ))
          }
        </div>
        <Padding value={40} />
        <div className={css.phoneBlock}>
          <div>Свяжитесь с нами по номеру</div>
          <div className={css.phone}>{MAIN_PHONE}</div>
        </div>
      </LayoutMobile>
    </div>
  </>
  )
}
SectionOpenMainMenuMobile.propTypes = {
  openMenu: PropTypes.func
}

export default React.memo(SectionOpenMainMenuMobile)
