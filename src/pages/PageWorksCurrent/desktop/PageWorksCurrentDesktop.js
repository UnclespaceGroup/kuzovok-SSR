import React from 'react'
import s from './PageWorksCurrentDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerWorks from '../../../containers/ContainerWorks/ContainerWorks'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PageWorksCurrentDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerWorks />
    <Padding value={80} />
  </div>
)

export default PageWorksCurrentDesktop
