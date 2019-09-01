import React from 'react'
// import PropTypes from 'prop-types'
import css from './TemplateSectionMainChooseAutoTypeDesktop.module.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import im1 from 'static/images/bba649u-960.jpg'
import im2 from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import Layout from '../Layout/Layout'

const SectionMainChooseAutoTypeDesktop = () => (
  <Layout className={css.container}>
    <div className={css.left} style={{ backgroundImage: `url(${im1})` }}>
      <div className={css.wrapper}>
        <div className={css.title}>У вас грузовое авто</div>
        <ul>
          <li><Link className={css.item} to={'/'}>Кузовной ремонт</Link></li>
          <li><Link className={css.item} to={'/'}>Покраска авто</Link></li>
          <li><Link className={css.item} to={'/'}>Антикоррозийная обработка</Link></li>
        </ul>
        <Button classname={'inline'} withIcon>Перейти<MdKeyboardArrowRight size={'2rem'} /></Button>
      </div>
    </div>
    <div className={css.right} style={{ backgroundImage: `url(${im2})` }}>
      <div className={css.wrapper}>
        <div className={css.title}>У вас легковое авто</div>
        <ul>
          <li><Link className={css.item} to={'/'}>Кузовной ремонт</Link></li>
          <li><Link className={css.item} to={'/'}>Покраска авто</Link></li>
          <li><Link className={css.item} to={'/'}>Антикоррозийная обработка</Link></li>
        </ul>
        <Button classname={'inline'} withIcon>Перейти<MdKeyboardArrowRight size={'2rem'} /></Button>
      </div>
    </div>
  </Layout>
)
SectionMainChooseAutoTypeDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionMainChooseAutoTypeDesktop)
