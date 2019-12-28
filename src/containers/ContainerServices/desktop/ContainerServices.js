import React from 'react'
import SectionService from 'components/SectionServices/desktop/SectionServices'
import useServices from '../useServices'
import { PAGE_SERVICES } from 'constants/ROUTES'
import SectionServicesSliderBanner from 'components/SliderBanner/desktop/SliderBannerDesktop'

const ContainerServices = () => {
  const { mainCards = [], cards = [], bannerItems } = useServices()
  return (
    <>
      <SectionServicesSliderBanner
        items={bannerItems}
      />
    <SectionService
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

export default React.memo(ContainerServices)
