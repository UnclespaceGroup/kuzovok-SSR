import React from 'react'
import Padding from 'components/Padding/Padding'
import usePaperDetail from 'containers/ContainerPaperDetail/usePaperDetail'
import LayoutMobile from 'components/Layout/LayoutMobile'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import SectionContactsMobile from 'components/SectionContacts/mobile/SectionContactsMobile'

const ContainerPaperDetailMobile = () => {
  const { bannerData, content } = usePaperDetail()
  return (
  <>
    <BannerMobile {...bannerData} />
    <LayoutMobile>
      <Padding value={60} />
      <WysiwygMobile>
        {content}
      </WysiwygMobile>
    </LayoutMobile>
    <SectionContactsMobile />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerPaperDetailMobile)
