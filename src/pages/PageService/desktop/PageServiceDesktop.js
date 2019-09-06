import React from 'react'
import s from './PageServiceDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerService from '../../../containers/ContainerService/ContainerService'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PageServiceDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerService />
    <Padding value={80} />
  </div>
)

export default PageServiceDesktop
