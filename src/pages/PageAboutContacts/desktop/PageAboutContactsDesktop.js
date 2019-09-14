import React from 'react'
import s from './PageAboutContactsDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import SectionMainMenuDesktop from '../../../containers/ContainerMainMenu/ContainerMainMenuDesktop'

const PageAboutContactsDesktop = () => (
  <div className={s.container}>
    <SectionMainMenuDesktop />
    service
    <Padding value={80} />
  </div>
)

export default PageAboutContactsDesktop
