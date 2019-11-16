import React from 'react'
import useAbout from './useAbout'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import SectionTextWithImage from '../../components/SectionTextWithImage/SectionTextWithImage'
import SectionTextWithImageBlack from '../../components/SectionTextWithImageBlack/SectionTextWithImageBlack'
import Padding from '../../components/Padding/Padding'
import ContainerContactsBlock from '../ContainerContactsBlock/ContainerContactsBlock'

const ContainerAbout = () => {
  const { bannerData, block1, block2 } = useAbout()
  return (
  <>
    <SectionTopBanner
      {...bannerData}
      sideBlock={<ControllerSideMenu />}
    />
    <SectionTextWithImage {...block1} />
    <SectionTextWithImageBlack {...block2} />
    <Padding value={60} />
    <ContainerContactsBlock />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerAbout)
