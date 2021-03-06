import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import css from './SectionContactsMobile.module.scss'
import { MdMail } from 'react-icons/md'
import { FaVk, FaInstagram } from 'react-icons/fa'
import YandexMap from '../../YandexMap/desktop/YandexMap'
import LayoutMobile from '../../Layout/LayoutMobile'

const SectionContactsMobile = ({ items, vk, mail }) => (
  <div className={css.container}>
    <LayoutMobile >
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
            <a href={vk}><FaVk size={'3rem'} /></a>
            <a href={`mailto:${mail}`}><MdMail size={'3rem'} /></a>
            <a><FaInstagram size={'3rem'} /></a>
          </li>
        </ul>
      </div>
    </LayoutMobile>
  </div>
)
SectionContactsMobile.propTypes = {
  items: PropTypes.array,
  vk: PropTypes.string,
  mail: PropTypes.string
}

export default React.memo(SectionContactsMobile)
