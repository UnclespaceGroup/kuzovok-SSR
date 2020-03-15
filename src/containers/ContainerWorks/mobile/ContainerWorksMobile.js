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
import css from './ContainerWorksMobile.module.scss'
import FieldSelectMobile from 'components/FieldSelect/mobile/FieldSelectMobile'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerWorksMobile = ({ match }) => {
  const { header, items, tabs, helmetData, activeTab, select } = useWorks({ ...match })
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerMobile withoutTabs {...header} />
      <Padding value={24} />
      <LayoutMobile>
        <SectionTitleMobile
          beforeTitleBlock={
            <div>
              <FieldSelectMobile {...select} />
              <Padding value={20} />
              <CheckTabsDesktop className={css.tabs} items={tabs} activeTabIndex={activeTab} />
            </div>}
          title={'Работы станции'} count={items?.length} />
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
