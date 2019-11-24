import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuMobile.module.scss'
import { Link } from 'react-router-dom'
import { items } from 'constants/MAIN_MENU'
import LayoutMobile from '../../Layout/LayoutMobile'

const SectionOpenMainMenuMobile = ({ openMenu }) => {
  return (
  <>
    <div className={css.back} onClick={() => { openMenu(false) }} />
    <div className={css.container}>
      <LayoutMobile >
        {
          items.map((item, key) => (
            <div key={key}>
              <Link className={css.title} to={item.title.to}>{item.title.text}</Link>
              <ul>
                {
                  _.map(item?.items, (it, k) => <li key={k}><Link to={it.to} className={css.item}>{it.title}</Link>
                  </li>)
                }
              </ul>
            </div>
          )
          )
        }
      </LayoutMobile>
    </div>
  </>
  )
}
SectionOpenMainMenuMobile.propTypes = {
  openMenu: PropTypes.func
}

export default React.memo(SectionOpenMainMenuMobile)
