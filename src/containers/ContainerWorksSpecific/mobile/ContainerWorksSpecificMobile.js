import React from 'react'
import PropTypes from 'prop-types'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import Padding from 'components/Padding/Padding'
import SectionWorksMobile from 'components/SectionWorks/mobile/SectionWorksMobile'
import useWorksSpecific from 'containers/ContainerWorksSpecific/useWorksSpecific'
import { withRouter } from 'react-router'
import { compose } from 'redux'

const ContainerWorksSpecificMobile = ({ match }) => {
  const { header, tabs, pending, ...works } = useWorksSpecific({ ...match })
  return (
  <>
    <BannerMobile withoutTabs {...header} />
    <Padding value={24} />
    <SectionWorksMobile {...works} />
    <Padding value={40} />
  </>
  )
}
ContainerWorksSpecificMobile.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorksSpecificMobile)
