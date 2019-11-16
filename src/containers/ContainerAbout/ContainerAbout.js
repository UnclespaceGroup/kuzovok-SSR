import React from 'react'
import useAbout from './useAbout'
import SectionTextWithImage from '../../components/SectionTextWithImage/SectionTextWithImage'
import SectionTextWithImageBlack from '../../components/SectionTextWithImageBlack/SectionTextWithImageBlack'
import Padding from '../../components/Padding/Padding'
import ContainerContactsBlock from '../ContainerContactsBlock/ContainerContactsBlock'
import SectionServicesSliderBanner from '../../components/SectionServicesSliderBanner/SectionServicesSliderBanner'
import Banner from '../../components/Banner/Banner'

const ContainerAbout = () => {
  const { block1, block2, bannerData } = useAbout()
  return (
  <>
    <Padding value={60} />
    <Banner {...bannerData} />
    <SectionServicesSliderBanner />
    <SectionTextWithImage {...block1} />
    <SectionTextWithImageBlack {...block2} />
    <Padding value={60} />
    <ContainerContactsBlock />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerAbout)
