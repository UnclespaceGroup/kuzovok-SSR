import React from 'react'
import css from './SectionHowFindMobile.module.scss'
import YandexMap from '../../YandexMap/desktop/YandexMap'
import Padding from '../../Padding/Padding'

const SectionHowFindMobile = () => (
  <div className={css.container}>
    <YandexMap />
    <Padding value={40} />
  </div>
)

export default React.memo(SectionHowFindMobile)
