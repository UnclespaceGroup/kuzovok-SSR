import React from 'react'
import SectionService from '../../components/SectionServices/SectionServices'
import useServices from './useServices'
import { PAGE_SERVICES } from '../../constants/ROUTES'
import SectionServicesSliderBanner from '../../components/SectionServicesSliderBanner/SectionServicesSliderBanner'
import Padding from '../../components/Padding/Padding'

const ContainerServices = () => {
  const { mainCards = [], cards = [], bannerItems } = useServices()
  return (
    <>
      <Padding value={80} />
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
