import React from 'react'
import AdvantagesRowDesktop from 'components/AdvantagesRow/desktop/AdvantagesRowDesktop'
import css from './ContainerHome.module.scss'
import Padding from 'components/Padding/Padding'
import SectionMainChooseAutoTypeDesktop from 'components/SectionMainChooseAutoType/desktop/SectionMainChooseAutoTypeDesktop'
import SectionMainServiceCatalogDesktop from 'components/SectionMainServiceCatalog/desktop/SectionMainServiceCatalogDesktop'
import ContainerLastWorks from 'containers/ContainerLastWorks/desktop/ContainerLastWorks'
import useHome from '../useHome'
import ContainerContactsBlock from 'containers/ContainerContactsBlock/desktop/ContainerContactsBlock'
import SliderBannerDesktop from 'components/SliderBanner/desktop/SliderBannerDesktop'

const ContainerHome = () => {
  const { services, bigBlockServices, advantages, mainSlider } = useHome()
  return (
    <div className={css.container}>
      <SliderBannerDesktop items={mainSlider} />
      <Padding value={120} />
      <AdvantagesRowDesktop items={advantages} />
      <Padding value={160} />
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
