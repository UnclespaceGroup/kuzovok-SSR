import React from 'react'
import css from './SectionHowFind.module.scss'
import YandexMap from '../YandexMap/YandexMap'
import Padding from '../Padding/Padding'

const SectionHowFind = () => (
  <div className={css.container}>
    <YandexMap />
    <Padding value={100} />
  </div>
)

export default React.memo(SectionHowFind)
