import React from 'react'
// import PropTypes from 'prop-types'
import css from './FooterMobile.module.scss'
import im from 'static/images/1517716721790_big_vlru.jpg'
import { Link } from 'react-router-dom'
import { items } from 'constants/MAIN_MENU'
import _ from 'lodash'
import LayoutMobile from '../../Layout/LayoutMobile'

const FooterMobile = () => (
  <div className={css.container} style={{ backgroundImage: `url(${im})` }}>
    <LayoutMobile className={css.wrapper}>
      <div className={css.row}>
        {
          items.map((item, key) => (
            <div key={key} className={css.block}>
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
      </div>
    </LayoutMobile>
  </div>
)
FooterMobile.propTypes = {
  // children: PropTypes.node
}

export default React.memo(FooterMobile)
