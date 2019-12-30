import React from 'react'
// import PropTypes from 'prop-types'
import css from './FooterMobile.module.scss'
import { Link } from 'react-router-dom'
import { menu } from 'constants/MAIN_MENU'
import _ from 'lodash'
import LayoutMobile from '../../Layout/LayoutMobile'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import Padding from 'components/Padding/Padding'
import { MAIN_PHONE, ADDRESS } from 'constants/contacts'
import { MdLocationOn } from 'react-icons/md'

const FooterMobile = () => (
  <>
    <div className={css.container} >
      <LayoutMobile className={css.wrapper}>
        <div className={css.logo} style={{ backgroundImage: `url(${logo})` }} />
        <Padding value={40} />
        <div>
          <div>
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
        <Padding value={20} />
        <hr />
        <Padding value={20} />
        <div className={css.contacts}>
          <div className={css.phone}>{MAIN_PHONE}</div>
          <div className={css.addr} ><MdLocationOn size={'2rem'} />{ADDRESS}</div>
        </div>
      </LayoutMobile>
    </div>
    <div className={css.unclespace}>
      <LayoutMobile>
        <div>Разработано Unclespace group</div>
      </LayoutMobile>
    </div>
  </>
)
FooterMobile.propTypes = {
  // children: PropTypes.node
}

export default React.memo(FooterMobile)
