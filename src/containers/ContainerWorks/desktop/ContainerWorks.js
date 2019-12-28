import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/Banner/desktop/Banner'
import Padding from 'components/Padding/Padding'
import useWorks from '../useWorks'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import SectionCardsRow from 'components/SectionCardsRow/desktop/SectionCardsRow'
import SectionTitle from 'components/SectionTitle/desktop/SectionTitle'
import CheckTabsDesktop from 'components/CheckTabs/desktop/CheckTabsDesktop'
import Layout from 'components/Layout/Layout'

const ContainerWorks = () => {
  const { header, items, tabs, activeTab } = useWorks()
  return (
    <>
      <Banner withoutTabs {...header} />
      <Padding value={80} />
      <Layout>
        <SectionTitle title={'Работы станции'} count={items?.length} />
        <CheckTabsDesktop items={tabs} activeTabIndex={activeTab} />
      </Layout>
      <SectionCardsRow
        items={items}
      />
      <Padding value={120} />
    </>
  )
}
ContainerWorks.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorks)
