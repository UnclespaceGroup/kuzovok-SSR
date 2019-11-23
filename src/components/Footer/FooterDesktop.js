import React from 'react'
// import PropTypes from 'prop-types'
import css from './FooterDesktop.module.scss'
import im from 'static/images/1517716721790_big_vlru.jpg'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { items } from 'constants/MAIN_MENU'
import _ from 'lodash'

const FooterDesktop = () => (
  <div className={css.container} style={{ backgroundImage: `url(${im})` }}>
    <Layout className={css.wrapper}>
      <div className={css.row}>
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
      </div>
      <div className={css.row}>
        Контактный блок
      </div>
    </Layout>
  </div>
)
FooterDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(FooterDesktop)
