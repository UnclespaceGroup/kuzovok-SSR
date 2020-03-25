import React from 'react'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import SectionReviewsMobile from 'components/SectionReviews/mobile/SectionReviewsMobile'
import SectionTabsMobile from 'components/SectionTabs/mobile/SectionTabsMobile'
import ContainerLastWorksMobile from '../../ContainerLastWorks/mobile/ContainerLastWorksMobile'
import useReviews from '../useReviews'
import { Route, Switch } from 'react-router'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from 'constants/ROUTES'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerReviewsMobile = () => {
  const { headerData, tabs, helmetData, pending, ...props } = useReviews()

  return (
  <>
    <ContainerHelmet {...helmetData} />
    <BannerMobile
      {...headerData}
    />
    <SectionTabsMobile items={tabs} pending={pending} />
    <Switch>
      <Route
        path={PAGE_REVIEWS_TODAY}
        render={() => <SectionReviewsMobile title={'Работы за сегодня'} {...props} />}
      />
      <Route
        path={PAGE_REVIEWS_WEEK}
        render={() => <SectionReviewsMobile title={'Работы за неделю'} {...props} />}
      />
      <Route
        path={PAGE_REVIEWS_MOUTH}
        render={() => <SectionReviewsMobile title={'Работы за месяц'} {...props} />}
      />
      <Route
        path={PAGE_REVIEWS}
        render={() => <SectionReviewsMobile title={'Все работы'} {...props} />}
      />
    </Switch>
    <ContainerLastWorksMobile />
  </>
  )
}

export default React.memo(ContainerReviewsMobile)
