import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/Banner/desktop/Banner'
import Padding from 'components/Padding/Padding'
import useWorksSpecific from 'containers/ContainerWorksSpecific/useWorksSpecific'
import { withRouter } from 'react-router'
import SectionWorks from 'components/SectionWorks/desktop/SectionWorks'
import { compose } from 'redux'

const ContainerWorksSpecificDesktop = ({ match }) => {
  const { header, tabs, pending, ...works } = useWorksSpecific({ ...match })
  return (
  <>
    <Banner withoutTabs {...header} />
    <Padding value={80} />
    <SectionWorks {...works} />
    <Padding value={80} />
    <Padding value={120} />
  </>
  )
}
ContainerWorksSpecificDesktop.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorksSpecificDesktop)
