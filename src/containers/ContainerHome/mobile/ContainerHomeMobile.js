import React from 'react'
import css from './ContainerHomeMobile.module.scss'
import Padding from 'components/Padding/Padding'
import useHome from '../useHome'
import SectionMainServiceCatalogMobile
  from 'components/SectionMainServiceCatalog/mobile/SectionMainServiceCatalogMobile'
import ContainerLastWorksMobile from 'containers/ContainerLastWorks/mobile/ContainerLastWorksMobile'
import ContainerContactsBlockMobile from 'containers/ContainerContactsBlock/mobile/ContainerContactsBlockMobile'
import SliderBannerMobile from 'components/SliderBanner/mobile/SliderBannerMobile'
import AdvantagesRowMobile from 'components/AdvantagesRow/mobile/AdvantagesRowMobile'
import SectionMainCardsMobile from 'components/SectionMainCards/mobile/SectionMainCardsMobile'
import LayoutMobile from 'components/Layout/LayoutMobile'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerHomeMobile = () => {
  const { services, mainCards, mainSlider, advantages, helmetData, text } = useHome()
  return (
    <div className={css.container}>
      <ContainerHelmet {...helmetData} />
      <SliderBannerMobile items={mainSlider} />
      <Padding value={40} />
      <LayoutMobile>
        <WysiwygMobile>
          {text}
        </WysiwygMobile>
      </LayoutMobile>
      <AdvantagesRowMobile items={advantages} />
      <Padding value={60} />
      <LayoutMobile>
        <SectionMainCardsMobile cards={mainCards} />
      </LayoutMobile>
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
