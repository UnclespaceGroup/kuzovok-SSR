import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionOpenMainMenuDesktop.module.scss'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import { items } from 'constants/MAIN_MENU'

const SectionOpenMainMenuDesktop = ({ openMenu }) => {
  return (
  <>
    <div className={css.back} onClick={() => { openMenu(false) }} />
    <div className={css.container}>
      <Layout className={css.row}>
        {
          items.map((item, key) => (
            <div className={css.column} key={key}>
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
      </Layout>
    </div>
  </>
  )
}
SectionOpenMainMenuDesktop.propTypes = {
  openMenu: PropTypes.func
}

export default React.memo(SectionOpenMainMenuDesktop)
