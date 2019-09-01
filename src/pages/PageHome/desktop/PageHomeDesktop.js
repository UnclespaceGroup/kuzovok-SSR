// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import ContainerBannerWithVideoDesktop
  from '../../../containers/ContainerBannerWithVideo/ContainerBannerWithVideoDesktop'
import SectionMainChooseAutoTypeDesktop
  from '../../../components/SectionMainChooseAutoType/SectionMainChooseAutoTypeDesktop'
import Padding from '../../../components/Padding/Padding'
import SectionMainServiceCatalogDesktop
  from '../../../components/SectionMainServiceCatalog/SectionMainServiceCatalogDesktop'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <ContainerBannerWithVideoDesktop />
    <Padding value={80} />
    <SectionMainChooseAutoTypeDesktop />
    <Padding value={80} />
    <SectionMainServiceCatalogDesktop />
    <Padding value={80} />
  </div>
)

export default React.memo(PageHomeDesktop)
