import React from 'react'
import SectionService from 'components/SectionServices/desktop/SectionServices'
import useServices from '../useServices'
import { PAGE_SERVICES } from 'constants/ROUTES'
import SectionServicesSliderBanner from 'components/SliderBanner/desktop/SliderBannerDesktop'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerServices = () => {
  const { mainCards = [], helmetData, cards = [], bannerItems } = useServices()
  return (
    <>
      <ContainerHelmet {...helmetData} />
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
