import React from 'react'
import s from './PagePaperDetailDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PagePaperDetailDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    service
    <Padding value={80} />
  </div>
)

export default PagePaperDetailDesktop
