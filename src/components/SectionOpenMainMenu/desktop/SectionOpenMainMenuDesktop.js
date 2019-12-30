import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuDesktop.module.scss'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import { menu } from 'constants/MAIN_MENU'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import { MAIN_PHONE } from 'constants/contacts'
import Padding from 'components/Padding/Padding'

const SectionOpenMainMenuDesktop = ({ openMenu }) => {
  return (
  <>
    <div className={css.back} onClick={() => { openMenu(false) }} />
    <div className={css.container}>
      <Layout>
        <div className={css.row}>
          <div className={css.logo} >
            <div className={css.logoIcon} style={{ backgroundImage: `url(${logo})` }} />
          </div>
          <div className={css.column}>
            {
              _.map(menu.mainItems, (item, key) => (
                <Link to={item.to} className={css.mainLink} key={key}>{item.title}</Link>
              ))
            }
          </div>
          <div className={css.column}>
            {
              _.map(menu.items, (item, key) => (
                <Link to={item.to} className={css.link} key={key}>{item.title}</Link>
              ))
            }
          </div>
        </div>
        <Padding value={40} />
        <div className={cn(css.row, css.borderTop)}>
          <div className={css.phoneBlock}>
            <div>Свяжитесь с нами по номеру</div>
            <div className={css.phone}>{MAIN_PHONE}</div>
          </div>
        </div>
      </Layout>
    </div>
  </>
  )
}
SectionOpenMainMenuDesktop.propTypes = {
  openMenu: PropTypes.func
}

export default React.memo(SectionOpenMainMenuDesktop)
