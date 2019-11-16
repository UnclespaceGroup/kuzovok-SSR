import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionContacts.module.scss'
import Layout from '../Layout/Layout'
import { MdMail } from 'react-icons/md'
import { FaVk, FaInstagram } from 'react-icons/fa'
import YandexMap from '../YandexMap/YandexMap'

const SectionContacts = ({ items }) => (
  <div className={css.container}>
    <Layout className={css.wrapper}>
      <div className={css.map} >
        <YandexMap />
      </div>
      <div className={css.content}>
        <div className={css.title}>Сервисный центр КУЗОВОК</div>
        <ul>
          {
            _.map(items, ({ icon, title }, key) => (
              <li className={css.address} key={key}>
                {icon}
                <div>{title}</div>
              </li>
            )
            )
          }
          <li className={css.social}>
            <a><FaVk size={'3rem'} /></a>
            <a><MdMail size={'3rem'} /></a>
            <a><FaInstagram size={'3rem'} /></a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
)
SectionContacts.propTypes = {
  items: PropTypes.array
}

export default React.memo(SectionContacts)
