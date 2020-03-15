import React from 'react'
import Padding from 'components/Padding/Padding'
import usePaperDetail from 'containers/ContainerPaperDetail/usePaperDetail'
import LayoutMobile from 'components/Layout/LayoutMobile'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import ContainerContactsBlockMobile from 'containers/ContainerContactsBlock/mobile/ContainerContactsBlockMobile'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerPaperDetailMobile = () => {
  const { bannerData, content, helmetData } = usePaperDetail()
  return (
  <>
    <ContainerHelmet {...helmetData} />
    <BannerMobile {...bannerData} />
    <LayoutMobile>
      <Padding value={60} />
      <WysiwygMobile>
        {content}
      </WysiwygMobile>
    </LayoutMobile>
    <ContainerContactsBlockMobile />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerPaperDetailMobile)
