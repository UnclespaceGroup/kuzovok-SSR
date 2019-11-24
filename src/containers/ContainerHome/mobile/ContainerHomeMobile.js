import React from 'react'
import css from './ContainerHomeMobile.module.scss'
import Padding from '../../../components/Padding/Padding'
import useHome from '../useHome'
import SectionMainChooseAutoTypeMobile from 'components/SectionMainChooseAutoType/mobile/SectionMainChooseAutoTypeMobile'
import SectionMainServiceCatalogMobile from 'components/SectionMainServiceCatalog/mobile/SectionMainServiceCatalogMobile'
import ContainerLastWorksMobile from '../../ContainerLastWorks/mobile/ContainerLastWorksMobile'
import ContainerContactsBlockMobile from '../../ContainerContactsBlock/mobile/ContainerContactsBlockMobile'
import SectionTopBannerMobile from '../../../components/SectionTopBanner/mobile/SectionTopBannerMobile'

const ContainerHomeMobile = () => {
  const { services, bigBlockServices, mainBanner } = useHome()
  return (
    <div className={css.container}>
      <SectionTopBannerMobile {...mainBanner} />
      <Padding value={80} />
      <SectionMainChooseAutoTypeMobile {...bigBlockServices} />
      <Padding value={80} />
      <SectionMainServiceCatalogMobile items={services} />
      <Padding value={80} />
      <ContainerLastWorksMobile />
      <Padding value={80} />
      <ContainerContactsBlockMobile />
      <Padding value={120} />
    </div>
  )
}

export default React.memo(ContainerHomeMobile)
