import React from 'react'
import PropTypes from 'prop-types'
import SectionServiceDetailDesktop from 'components/SectionServiceDetail/desktop/SectionServiceDetailDesktop'
import Padding from 'components/Padding/Padding'
import SectionContacts from 'components/SectionContacts/desktop/SectionContacts'
import useServiceDetail from '../useServiceDetail'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { PAGE_SERVICES } from 'constants/ROUTES'
import Banner from 'components/Banner/desktop/Banner'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import Section404Desktop from 'components/Section404/desktop/Section404Desktop'

const ContainerServiceDetail = ({ match }) => {
  const { bannerData, helmetData, content, isEmpty } = useServiceDetail({ ...match })

  if (isEmpty) return <Section404Desktop />

  return (
  <>
    <ContainerHelmet {...helmetData} />
    <Banner
      backLink={PAGE_SERVICES}
      {...bannerData} />
    <Padding value={120} />
    <SectionServiceDetailDesktop
      {...content}
    />
    <Padding value={150} />
    <SectionContacts />
    <Padding value={100} />
  </>
  )
}
ContainerServiceDetail.propTypes = {
  match: PropTypes.object
}

export default compose(
  React.memo,
  withRouter
)(ContainerServiceDetail)
