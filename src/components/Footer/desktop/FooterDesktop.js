import React from 'react'
import PropTypes from 'prop-types'
import css from './FooterDesktop.module.scss'
import Layout from '../../Layout/Layout'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import _ from 'lodash'
import { menu } from 'constants/MAIN_MENU'
import { Link } from 'react-router-dom'
import Padding from 'components/Padding/Padding'
import { MdLocationOn } from 'react-icons/md'

const FooterDesktop = ({ phone, address }) => (
  <>
  <div className={css.container} >
    <Layout className={css.wrapper}>
      <div className={css.logo} style={{ backgroundImage: `url(${logo})` }} />
      <Padding value={40} />
      <div className={css.row}>
        {
          _.map(menu.mainItems, (item, key) => (
            <Link to={item.to} className={css.mainLink} key={key}>{item.title}</Link>
          ))
        }
      </div>
      <Padding value={40} />
      <hr />
      <Padding value={40} />
      <div className={css.contacts}>
        <div className={css.phone}><a href={`tel:${phone}`}>{phone}</a></div>
        <div className={css.addr} ><MdLocationOn size={'2rem'} />{address}</div>
      </div>
    </Layout>
  </div>
    <div className={css.unclespace}>
      <Layout>
        <div>Разработано Unclespace group</div>
      </Layout>
    </div>
    </>
)
FooterDesktop.propTypes = {
  phone: PropTypes.node,
  address: PropTypes.node
}

export default React.memo(FooterDesktop)
