import React from 'react'
// import PropTypes from 'prop-types'
import css from './SectionContacts.module.scss'
import Layout from '../Layout/Layout'
import { MdPhone, MdAccessTime, MdLocationOn, MdMail } from 'react-icons/md'
import { FaVk, FaInstagram } from 'react-icons/fa'

const SectionContacts = () => (
  <div className={css.container}>
    <Layout className={css.wrapper}>
      <div className={css.img} />
      <div className={css.content}>
        <div className={css.title}>Сервисный центр КУЗОВОК</div>
        <ul>
          <li>
            <MdLocationOn className={css.icon} size={'2rem'} />
            <div className={css.address}>
              <div>Сыктывкар, ул. Тентюковская, д.22</div>
              <a>Показать на карте</a>
            </div>
          </li>
          <li>
            <MdPhone className={css.icon} size={'2rem'} />
            <a href={'tel: 3333333'}>8 (904) 555 66 89</a>
          </li>
          <li>
            <MdAccessTime className={css.icon} size={'2rem'} />
            <div>Пн-Вс: 10:00 - 19:00</div>
          </li>
          <li>
            <div className={css.status}>Сейчас открыто</div>
          </li>
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

export default React.memo(SectionContacts)
