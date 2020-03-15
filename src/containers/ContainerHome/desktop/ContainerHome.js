import React from 'react'
import AdvantagesRowDesktop from 'components/AdvantagesRow/desktop/AdvantagesRowDesktop'
import css from './ContainerHome.module.scss'
import Padding from 'components/Padding/Padding'
import SectionMainServiceCatalogDesktop
  from 'components/SectionMainServiceCatalog/desktop/SectionMainServiceCatalogDesktop'
import ContainerLastWorks from 'containers/ContainerLastWorks/desktop/ContainerLastWorks'
import useHome from '../useHome'
import ContainerContactsBlock from 'containers/ContainerContactsBlock/desktop/ContainerContactsBlock'
import SliderBannerDesktop from 'components/SliderBanner/desktop/SliderBannerDesktop'
import SectionMainCardsDesktop from 'components/SectionMainCards/desktop/SectionMainCardsDesktop'
import Layout from 'components/Layout/Layout'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import ContainerHelmet from '../../ContainerHelmet/ContainerHelmet'

const ContainerHome = () => {
  const { services, mainCards, helmetData, advantages, mainSlider, text } = useHome()
  return (
    <div className={css.container}>
      <ContainerHelmet {...helmetData} />
      <SliderBannerDesktop items={mainSlider} />
      <Padding value={120} />
      { text && <Layout>
        <Wysiwyg>{text}</Wysiwyg>
        <Padding value={120} />
      </Layout>}
      <AdvantagesRowDesktop items={advantages} />
      <Padding value={160} />
      <SectionMainCardsDesktop cards={mainCards} />
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
