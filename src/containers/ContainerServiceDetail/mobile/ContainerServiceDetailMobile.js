import React from 'react'
import PropTypes from 'prop-types'
import Padding from 'components/Padding/Padding'
import SectionContactsMobile from 'components/SectionContacts/mobile/SectionContactsMobile'
import SectionServiceDetailMobile from 'components/SectionServiceDetail/mobile/SectionServiceDetailMobile'
import useServiceDetail from '../useServiceDetail'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { PAGE_SERVICES } from 'constants/ROUTES'
import BannerMobile from 'components/Banner/mobile/BannerMobile'

const ContainerServiceDetailMobile = ({ match }) => {
  const { bannerData, content } = useServiceDetail({ ...match })
  return (
  <>
    <BannerMobile
      backLink={PAGE_SERVICES}
      {...bannerData} />
    <Padding value={60} />
    <SectionServiceDetailMobile
      {...content}
    />
    <Padding value={60} />
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
