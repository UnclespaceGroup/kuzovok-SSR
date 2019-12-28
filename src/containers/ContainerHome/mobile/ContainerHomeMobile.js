import React from 'react'
import css from './ContainerHomeMobile.module.scss'
import Padding from 'components/Padding/Padding'
import useHome from '../useHome'
import SectionMainChooseAutoTypeMobile from 'components/SectionMainChooseAutoType/mobile/SectionMainChooseAutoTypeMobile'
import SectionMainServiceCatalogMobile from 'components/SectionMainServiceCatalog/mobile/SectionMainServiceCatalogMobile'
import ContainerLastWorksMobile from 'containers/ContainerLastWorks/mobile/ContainerLastWorksMobile'
import ContainerContactsBlockMobile from 'containers/ContainerContactsBlock/mobile/ContainerContactsBlockMobile'
import SliderBannerMobile from 'components/SliderBanner/mobile/SliderBannerMobile'
import AdvantagesRowMobile from 'components/AdvantagesRow/mobile/AdvantagesRowMobile'

const ContainerHomeMobile = () => {
  const { services, bigBlockServices, mainSlider, advantages } = useHome()
  return (
    <div className={css.container}>
      <SliderBannerMobile items={mainSlider} />
      <Padding value={60} />
      <AdvantagesRowMobile items={advantages} />
      <SectionMainChooseAutoTypeMobile {...bigBlockServices} />
      <Padding value={60} />
      <SectionMainServiceCatalogMobile items={services} />
      <Padding value={60} />
      <ContainerLastWorksMobile />
      <ContainerContactsBlockMobile />
      <Padding value={120} />
    </div>
  )
}

export default React.memo(ContainerHomeMobile)
