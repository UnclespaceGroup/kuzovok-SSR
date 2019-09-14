import React from 'react'
import s from './PageServiceDesktop.module.scss'
import ContainerService from '../../../containers/ContainerService/ContainerService'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PageServiceDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerService />
  </div>
)

export default PageServiceDesktop
