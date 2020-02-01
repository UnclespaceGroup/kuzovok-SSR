import React from 'react'
import css from './FooterMobile.module.scss'
import { Link } from 'react-router-dom'
import { menu } from 'constants/MAIN_MENU'
import _ from 'lodash'
import LayoutMobile from 'components/Layout/LayoutMobile'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import Padding from 'components/Padding/Padding'
import { MdLocationOn } from 'react-icons/md'
import PropTypes from 'prop-types'

const FooterMobile = ({ phone, address }) => (
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
        </div>
        <Padding value={20} />
        <hr />
        <Padding value={20} />
        <div className={css.contacts}>
          <div className={css.phone}><a href={`tel:${phone}`}>{phone}</a></div>
          <div className={css.addr} ><MdLocationOn size={'2rem'} />{address}</div>
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
  phone: PropTypes.node,
  address: PropTypes.node
}
export default React.memo(FooterMobile)
