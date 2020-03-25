import React from 'react'
import ContainerLastWorks from 'containers/ContainerLastWorks/desktop/ContainerLastWorks'
import useReviews from '../useReviews'
import Banner from 'components/Banner/desktop/Banner'
import SectionTabs from 'components/SectionTabs/desktop/SectionTabs'
import { Route, Switch } from 'react-router'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from 'constants/ROUTES'
import SectionReviews from 'components/SectionReviews/desktop/SectionReviews'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerReviews = () => {
  const { headerData, helmetData, tabs, pending, ...props } = useReviews()

  return (
  <>
    <ContainerHelmet {...helmetData} />
    <Banner
      {...headerData}
    />
    <SectionTabs items={tabs} pending={pending} />
    <Switch>
      <Route
        path={PAGE_REVIEWS_TODAY}
        render={() => <SectionReviews title={'Работы за сегодня'} {...props} />}
      />
      <Route
        path={PAGE_REVIEWS_WEEK}
        render={() => <SectionReviews title={'Работы за неделю'} {...props} />}
      />
      <Route
        path={PAGE_REVIEWS_MOUTH}
        render={() => <SectionReviews title={'Работы за месяц'} {...props} />}
      />
      <Route
        path={PAGE_REVIEWS}
        render={() => <SectionReviews title={'Все работы'} {...props} />}
      />
    </Switch>
    <ContainerLastWorks />
  </>
  )
}

export default React.memo(ContainerReviews)
