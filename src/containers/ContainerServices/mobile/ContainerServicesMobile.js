import React from 'react'
import SectionServicesMobile from 'components/SectionServices/mobile/SectionServicesMobile'
import useServices from '../useServices'
import { PAGE_SERVICES } from 'constants/ROUTES'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import BannerMobile from 'components/Banner/mobile/BannerMobile'

const ContainerServicesMobile = () => {
  const { mainCards = [], helmetData, cards = [], bannerData } = useServices()
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerMobile
        {...bannerData}
      />
    <SectionServicesMobile
      mainCards={mainCards}
      cards={cards}
      url={PAGE_SERVICES}
    />
    </>
  )
}

export default React.memo(ContainerServicesMobile)
