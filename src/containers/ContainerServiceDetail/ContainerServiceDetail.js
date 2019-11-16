import React from 'react'
import PropTypes from 'prop-types'
import im1 from 'static/images/bba649u-960.jpg'
import SectionTextWithImage from '../../components/SectionTextWithImage/SectionTextWithImage'
import Padding from '../../components/Padding/Padding'
import SectionTextWithImageBlack from '../../components/SectionTextWithImageBlack/SectionTextWithImageBlack'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import useServiceDetail from './useServiceDetail'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { PAGE_SERVICES } from '../../constants/ROUTES'

const textBlock1 = {
  title: 'Интересный заголовок',
  img: im1,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const ContainerServiceDetail = ({ match }) => {
  const { bannerData } = useServiceDetail({ ...match })
  return (
  <>
    <SectionTopBanner
      backLink={PAGE_SERVICES}
      sideBlock={<ControllerSideMenu />}
      {...bannerData} />
    <Padding value={64} />
    <SectionTextWithImage {...textBlock1} />
    <Padding value={64} />
    <SectionTextWithImageBlack {...textBlock1} />
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
