import React from 'react'
import PropTypes from 'prop-types'
import css from './TemplateSectionMainChooseAutoTypeDesktop.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import im1 from 'static/images/bba649u-960.jpg'
import im2 from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import Layout from '../../Layout/Layout'
import _ from 'lodash'

const SectionMainChooseAutoTypeDesktop = ({ truckItems, passengerCarItems }) => (
  <Layout className={css.container}>
    <div className={css.left} style={{ backgroundImage: `url(${im1})` }}>
      <div className={css.wrapper}>
        <div className={css.title}>У вас грузовое авто</div>
        <ul>
          {
            _.map(truckItems, ({ to, title }, key) => (
              <li key={key}><Link className={css.item} to={to}>{title}</Link></li>
            ))
          }
        </ul>
        <Button classname={'inline'} withIcon>Все услуги<MdKeyboardArrowRight size={'2rem'} /></Button>
      </div>
    </div>
    <div className={css.right} style={{ backgroundImage: `url(${im2})` }}>
      <div className={css.wrapper}>
        <div className={css.title}>У вас легковое авто</div>
        <ul>
          {
            _.map(passengerCarItems, ({ to, title }, key) => (
              <li key={key}><Link className={css.item} to={to}>{title}</Link></li>
            ))
          }
        </ul>
        <Button classname={'inline'} withIcon>Все услуги<MdKeyboardArrowRight size={'2rem'} /></Button>
      </div>
    </div>
  </Layout>
)
SectionMainChooseAutoTypeDesktop.propTypes = {
  truckItems: PropTypes.array,
  passengerCarItems: PropTypes.array
}

export default React.memo(SectionMainChooseAutoTypeDesktop)
