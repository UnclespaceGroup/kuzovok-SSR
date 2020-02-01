import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuDesktop.module.scss'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import { menu } from 'constants/MAIN_MENU'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import Padding from 'components/Padding/Padding'

const SectionOpenMainMenuDesktop = ({ openMenu, phone }) => {
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
            <Link to={'/'} className={css.mainLink} >Главная</Link>
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
            <div className={css.phone}><a href={`tel:${phone}`}>{phone}</a></div>
          </div>
        </div>
      </Layout>
    </div>
  </>
  )
}
SectionOpenMainMenuDesktop.propTypes = {
  openMenu: PropTypes.func,
  phone: PropTypes.string
}

export default React.memo(SectionOpenMainMenuDesktop)
