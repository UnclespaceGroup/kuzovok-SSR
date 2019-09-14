import React from 'react'
import s from './PageServiceDetailDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerService from '../../../containers/ContainerServiceDetail/ContainerServiceDetail'
import SectionMainMenuDesktop from '../../../containers/ContainerMainMenu/ContainerMainMenuDesktop'

const PageServiceDetailDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerService />
    <Padding value={80} />
  </div>
)

export default PageServiceDetailDesktop
