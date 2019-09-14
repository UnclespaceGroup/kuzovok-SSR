import React from 'react'
import s from './PageWorkDetailDayDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerWorkDetail from '../../../containers/ContainerWorkDetail/ContainerWorkDetail'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PageWorkDetailDayDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerWorkDetail />
    <Padding value={80} />
  </div>
)

export default PageWorkDetailDayDesktop
