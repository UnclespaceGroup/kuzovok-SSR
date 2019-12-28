import React from 'react'
import PropTypes from 'prop-types'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import Padding from 'components/Padding/Padding'
import useWorks from '../useWorks'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import SectionCardsRowMobile from 'components/SectionCardsRow/mobile/SectionCardsRowMobile'
import SectionTitleMobile from 'components/SectionTitle/mobile/SectionTitleMobile'
import CheckTabsDesktop from 'components/CheckTabs/desktop/CheckTabsDesktop'
import LayoutMobile from 'components/Layout/LayoutMobile'

const ContainerWorksMobile = ({ match }) => {
  const { header, items, tabs, activeTab } = useWorks({ ...match })
  return (
    <>
      <BannerMobile withoutTabs {...header} />
      <Padding value={24} />
      <LayoutMobile>
        <SectionTitleMobile title={'Работы станции'} count={items?.length} />
        <CheckTabsDesktop items={tabs} activeTabIndex={activeTab} />
      </LayoutMobile>
      <SectionCardsRowMobile
        items={items}
      />
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
