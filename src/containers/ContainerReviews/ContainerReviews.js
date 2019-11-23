import React from 'react'
import PropTypes from 'prop-types'
import ContainerLastWorks from '../ContainerLastWorks/ContainerLastWorks'
import IconCount from '../../components/IconCount/IconCount'
import useReviews from './useReviews'
import Banner from '../../components/Banner/Banner'
import SectionTabs from '../../components/SectionTabs/SectionTabs'
import { Route, Switch, withRouter } from 'react-router'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from '../../constants/ROUTES'
import { compose } from 'redux'
import SectionReviews from '../../components/SectionReviews/SectionReviews'

const ContainerReviews = ({ location }) => {
  const { items = [], headerData, tabs } = useReviews({ location })

  return (
  <>
    <Banner
      {...headerData}
      addIcon={
        <IconCount
          count={items.length}
          texts={['запись', 'записи', 'записей']}
        />
      }
    />
    <SectionTabs items={tabs} />
    <Switch>
      <Route
        path={PAGE_REVIEWS_TODAY}
        render={() => <SectionReviews title={'Работы за сегодня'} items={items} />}
      />
      <Route
        path={PAGE_REVIEWS_WEEK}
        render={() => <SectionReviews title={'Работы за неделю'} items={items} />}
      />
      <Route
        path={PAGE_REVIEWS_MOUTH}
        render={() => <SectionReviews title={'Работы за месяц'} items={items} />}
      />
      <Route
        path={PAGE_REVIEWS}
        render={() => <SectionReviews title={'Все работы'} items={items} />}
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
