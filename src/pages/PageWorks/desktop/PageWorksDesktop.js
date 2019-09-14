import React from 'react'
import s from './PageWorksDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerWorks from '../../../containers/ContainerWorks/ContainerWorks'
import SectionMainMenuDesktop from '../../../containers/ContainerMainMenu/ContainerMainMenuDesktop'

const PageWorksDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    <ContainerWorks />
    <Padding value={80} />
  </div>
)

export default PageWorksDesktop
