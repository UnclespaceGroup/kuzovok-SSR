import React from 'react'
import css from './ContainerHome.module.scss'
import ContainerBannerWithVideoDesktop from '../ContainerBannerWithVideo/ContainerBannerWithVideoDesktop'
import Padding from '../../components/Padding/Padding'
import SectionMainChooseAutoTypeDesktop
  from '../../components/SectionMainChooseAutoType/SectionMainChooseAutoTypeDesktop'
import SectionMainServiceCatalogDesktop
  from '../../components/SectionMainServiceCatalog/SectionMainServiceCatalogDesktop'
import ContainerLastWorks from '../ContainerLastWorks/ContainerLastWorks'
import useHome from './useHome'
import ContainerContactsBlock from '../ContainerContactsBlock/ContainerContactsBlock'

const ContainerHome = () => {
  const { services, bigBlockServices } = useHome()
  return (
    <div className={css.container}>
      <ContainerBannerWithVideoDesktop />
      <Padding value={80} />
      <SectionMainChooseAutoTypeDesktop {...bigBlockServices} />
      <Padding value={80} />
      <SectionMainServiceCatalogDesktop items={services} />
      <Padding value={80} />
      <ContainerLastWorks />
      <Padding value={80} />
      <ContainerContactsBlock />
      <Padding value={120} />
    </div>
  )
}

export default React.memo(ContainerHome)
