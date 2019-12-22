import React from 'react'
import PropTypes from 'prop-types'
import Padding from '../../../components/Padding/Padding'
import SectionAboutVideoMobile from '../../../components/SectionAboutVideo/mobile/SectionAboutVideoMobile'
import SectionContactsMobile from '../../../components/SectionContacts/mobile/SectionContactsMobile'
import SectionServiceDetailMobile from '../../../components/SectionServiceDetail/mobile/SectionServiceDetailMobile'
import SectionTextWithImageBlackMobile
  from '../../../components/SectionTextWithImageBlack/mobile/SectionTextWithImageBlackMobile'
import SectionTopBannerMobile from '../../../components/SectionTopBanner/mobile/SectionTopBannerMobile'
import useServiceDetail from '../useServiceDetail'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { PAGE_SERVICES } from '../../../constants/ROUTES'

const ContainerServiceDetailMobile = ({ match }) => {
  const { bannerData, videos, content, textBlock1 } = useServiceDetail({ ...match })
  return (
  <>
    <SectionTopBannerMobile
      backLink={PAGE_SERVICES}
      {...bannerData} />
    <Padding value={60} />
    <SectionServiceDetailMobile
      {...content}
    />
    <Padding value={60} />
    <SectionTextWithImageBlackMobile {...textBlock1} />
    <Padding value={60} />
    <SectionAboutVideoMobile videos={videos} />
    <SectionContactsMobile />
    <Padding value={60} />
  </>
  )
}
ContainerServiceDetailMobile.propTypes = {
  match: PropTypes.object
}

export default compose(
  React.memo,
  withRouter
)(ContainerServiceDetailMobile)
