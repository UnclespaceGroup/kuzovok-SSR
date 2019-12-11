import React from 'react'
import PropTypes from 'prop-types'
import css from './WidgetServiceDetailDesktop.module.scss'

const WidgetServiceDetailDesktop = ({ title, items }) => (
  <div className={css.container}>
    <div className={css.title}>Как записаться на ремонт</div>
    <div className={css.block}>
      <div className={css.number}>1</div>
      <div className={css.blockTitle}>Что то первое</div>
      <div className={css.text}>Fываимвад овт мловтотвлоатмват тва товатм</div>
    </div>
    <div className={css.block}>
      <div className={css.number}>2</div>
      <div className={css.blockTitle}>Что то второе</div>
      <div className={css.text}>Dываимвад овт мловтотвлоатмват тва товатм</div>
    </div>
    <div className={css.block}>
      <div className={css.number}>3</div>
      <div className={css.blockTitle}>Что то третье</div>
      <div className={css.text}>Dываимвад овт мловтотвлоатмват тва товатм</div>
    </div>
  </div>
)
WidgetServiceDetailDesktop.propTypes = {
  title: PropTypes.node,
  items: PropTypes.array
}

export default React.memo(WidgetServiceDetailDesktop)
