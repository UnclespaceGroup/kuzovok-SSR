import React from 'react'
import s from './PagePaperDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PagePaperDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    service
    <Padding value={80} />
  </div>
)

export default PagePaperDesktop
