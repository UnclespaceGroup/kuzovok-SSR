import React from 'react'
import PropTypes from 'prop-types'
import SectionAboutVideo from 'components/SectionAboutVideo/desktop/SectionAboutVideo'
import SectionServiceDetailDesktop from 'components/SectionServiceDetail/desktop/SectionServiceDetailDesktop'
import Padding from 'components/Padding/Padding'
import SectionTextWithImageBlack from 'components/SectionTextWithImageBlack/desktop/SectionTextWithImageBlack'
import SectionContacts from 'components/SectionContacts/desktop/SectionContacts'
import useServiceDetail from '../useServiceDetail'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { PAGE_SERVICES } from 'constants/ROUTES'
import Banner from 'components/Banner/desktop/Banner'

const ContainerServiceDetail = ({ match }) => {
  const { bannerData, videos, content, textBlock1 } = useServiceDetail({ ...match })
  return (
  <>
    <Banner
      backLink={PAGE_SERVICES}
      {...bannerData} />
    <Padding value={120} />
    <SectionServiceDetailDesktop
      {...content}
    />
    <Padding value={120} />
    <SectionTextWithImageBlack {...textBlock1} />
    <Padding value={150} />
    <SectionAboutVideo videos={videos} />
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
