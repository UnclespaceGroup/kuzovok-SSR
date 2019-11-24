import React from 'react'
import SectionServicesMobile from '../../../components/SectionServices/mobile/SectionServicesMobile'
import SectionServicesSliderBannerMobile
  from '../../../components/SectionServicesSliderBanner/mobile/SectionServicesSliderBannerMobile'
import useServices from '../useServices'
import { PAGE_SERVICES } from '../../../constants/ROUTES'
import Padding from '../../../components/Padding/Padding'

const ContainerServicesMobile = () => {
  const { mainCards = [], cards = [], bannerItems } = useServices()
  return (
    <>
      <Padding value={80} />
      <SectionServicesSliderBannerMobile
        items={bannerItems}
      />
    <SectionServicesMobile
      mainCards={{
        items: mainCards
      }}
      cards={{
        items: cards
      }}
      url={PAGE_SERVICES}
    />
    </>
  )
}

export default React.memo(ContainerServicesMobile)
