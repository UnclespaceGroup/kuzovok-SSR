import React from 'react'
import PropTypes from 'prop-types'
import Padding from '../../../components/Padding/Padding'
import SectionContacts from '../../../components/SectionContacts/desktop/SectionContacts'
import SectionTopBannerMobile from '../../../components/SectionTopBanner/mobile/SectionTopBannerMobile'
import useServiceDetail from '../useServiceDetail'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { PAGE_SERVICES } from '../../../constants/ROUTES'

const ContainerServiceDetailMobile = ({ match }) => {
  const { bannerData } = useServiceDetail({ ...match })
  return (
  <>
    <SectionTopBannerMobile
      backLink={PAGE_SERVICES}
      {...bannerData} />
    <Padding value={64} />
    <Padding value={64} />
    <Padding value={150} />
    <SectionContacts />
    <Padding value={100} />
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
