import React from 'react'
import SectionService from 'components/SectionServices/desktop/SectionServices'
import useServices from '../useServices'
import { PAGE_SERVICES } from 'constants/ROUTES'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import SectionTabs from 'components/SectionTabs/desktop/SectionTabs'
import Banner from 'components/Banner/desktop/Banner'

const ContainerServices = () => {
  const { mainCards, helmetData, cards, bannerData } = useServices()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <Banner
        {...bannerData}
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
