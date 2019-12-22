import React from 'react'
import AdvantagesRowDesktop from '../../../components/AdvantagesRow/desktop/AdvantagesRowDesktop'
import css from './ContainerHome.module.scss'
import ContainerBannerWithVideoDesktop from '../../ContainerBannerWithVideo/ContainerBannerWithVideoDesktop'
import Padding from '../../../components/Padding/Padding'
import SectionMainChooseAutoTypeDesktop
  from '../../../components/SectionMainChooseAutoType/desktop/SectionMainChooseAutoTypeDesktop'
import SectionMainServiceCatalogDesktop
  from '../../../components/SectionMainServiceCatalog/desktop/SectionMainServiceCatalogDesktop'
import ContainerLastWorks from '../../ContainerLastWorks/desktop/ContainerLastWorks'
import useHome from '../useHome'
import ContainerContactsBlock from '../../ContainerContactsBlock/desktop/ContainerContactsBlock'

const ContainerHome = () => {
  const { services, bigBlockServices, advantages } = useHome()
  return (
    <div className={css.container}>
      <ContainerBannerWithVideoDesktop />
      <Padding value={80} />
      <AdvantagesRowDesktop items={advantages} />
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
