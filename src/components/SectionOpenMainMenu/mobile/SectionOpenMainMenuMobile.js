import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuMobile.module.scss'
import { Link } from 'react-router-dom'
import { menu } from 'constants/MAIN_MENU'
import LayoutMobile from '../../Layout/LayoutMobile'
import Padding from 'components/Padding/Padding'
import { MAIN_PHONE } from 'constants/contacts'

const SectionOpenMainMenuMobile = ({ openMenu }) => {
  return (
  <>
    <div className={css.back} onClick={() => { openMenu(false) }} />
    <div className={css.container}>
      <LayoutMobile >
        <div className={css.block}>
          {
            _.map(menu.mainItems, (item, key) => (
              <Link to={item.to} className={css.mainLink} key={key}>{item.title}</Link>
            ))
          }
        </div>
        {/* { */}
        {/*  _.map(menu.items, (item, key) => ( */}
        {/*    <Link to={item.to} className={css.link} key={key}>{item.title}</Link> */}
        {/*  )) */}
        {/* } */}
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
