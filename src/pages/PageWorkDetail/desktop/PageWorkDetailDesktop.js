import React from 'react'
import s from './PageWorkDetailDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerWorkDetail from '../../../containers/ContainerWorkDetail/ContainerWorkDetail'
import SectionMainMenuDesktop from '../../../containers/ContainerMainMenu/ContainerMainMenuDesktop'

const PageWorkDetailDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerWorkDetail />
    <Padding value={80} />
  </div>
)

export default PageWorkDetailDesktop
