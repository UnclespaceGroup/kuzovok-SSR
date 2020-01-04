import React from 'react'
import PropTypes from 'prop-types'
import ContainerLastWorks from 'containers/ContainerLastWorks/desktop/ContainerLastWorks'
import useReviews from '../useReviews'
import Banner from 'components/Banner/desktop/Banner'
import SectionTabs from 'components/SectionTabs/desktop/SectionTabs'
import { Route, Switch, withRouter } from 'react-router'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from 'constants/ROUTES'
import { compose } from 'redux'
import SectionReviews from 'components/SectionReviews/desktop/SectionReviews'

const ContainerReviews = ({ location }) => {
  const { items = [], headerData, tabs, pending, sideMenuItems } = useReviews({ location })

  return (
  <>
    <Banner
      {...headerData}
    />
    <SectionTabs items={tabs} pending={pending} />
    <Switch>
      <Route
        path={PAGE_REVIEWS_TODAY}
        render={() => <SectionReviews title={'Работы за сегодня'} items={items} sideMenuItems={sideMenuItems} />}
      />
      <Route
        path={PAGE_REVIEWS_WEEK}
        render={() => <SectionReviews title={'Работы за неделю'} items={items} sideMenuItems={sideMenuItems} />}
      />
      <Route
        path={PAGE_REVIEWS_MOUTH}
        render={() => <SectionReviews title={'Работы за месяц'} items={items} sideMenuItems={sideMenuItems} />}
      />
      <Route
        path={PAGE_REVIEWS}
        render={() => <SectionReviews title={'Все работы'} items={items} sideMenuItems={sideMenuItems} />}
      />
    </Switch>
    <ContainerLastWorks />
  </>
  )
}
ContainerReviews.propTypes = {
  location: PropTypes.object
}

export default compose(
  React.memo,
  withRouter
)(ContainerReviews)
