import React from 'react'
import SectionServicesMobile from 'components/SectionServices/mobile/SectionServicesMobile'
import SectionServicesSliderBannerMobile from 'components/SliderBanner/mobile/SliderBannerMobile'
import useServices from '../useServices'
import { PAGE_SERVICES } from 'constants/ROUTES'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerServicesMobile = () => {
  const { mainCards = [], helmetData, cards = [], bannerItems } = useServices()
  return (
    <>
      <ContainerHelmet {...helmetData} />
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
