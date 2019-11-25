import React from 'react'
import PropTypes from 'prop-types'
import BannerMobile from '../../../components/Banner/mobile/BannerMobile'
import Padding from '../../../components/Padding/Padding'
import SectionTabsMobile from '../../../components/SectionTabs/mobile/SectionTabsMobile'
import SectionWorksMobile from '../../../components/SectionWorks/mobile/SectionWorksMobile'
import useWorks from '../useWorks'
import { withRouter } from 'react-router'
import { compose } from 'redux'

const ContainerWorksMobile = ({ match }) => {
  const { header, tabs, pending, ...works } = useWorks({ ...match })
  return (
  <>
    <BannerMobile {...header} />
    <SectionTabsMobile items={tabs} pending={pending} />
    <Padding value={24} />
    <SectionWorksMobile {...works} />
    <Padding value={40} />
  </>
  )
}
ContainerWorksMobile.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorksMobile)
