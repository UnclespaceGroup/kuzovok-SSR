import React from 'react'
import SectionService from 'components/SectionServices/desktop/SectionServices'
import useServices from '../useServices'
import { PAGE_SERVICES } from 'constants/ROUTES'
import SectionServicesSliderBanner from 'components/SliderBanner/desktop/SliderBannerDesktop'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import SectionTabs from 'components/SectionTabs/desktop/SectionTabs'

const ContainerServices = () => {
  const { mainCards, helmetData, cards, bannerItems } = useServices()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <SectionServicesSliderBanner
        items={bannerItems}
      />
      <SectionTabs />
      <SectionService
        mainCards={mainCards}
        cards={cards}
        url={PAGE_SERVICES}
      />
    </>
  )
}

export default React.memo(ContainerServices)
