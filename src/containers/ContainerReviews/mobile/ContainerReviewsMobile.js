import React from 'react'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import SectionReviewsMobile from 'components/SectionReviews/mobile/SectionReviewsMobile'
import SectionTabsMobile from 'components/SectionTabs/mobile/SectionTabsMobile'
import IconCount from 'components/IconCount/IconCount'
import ContainerLastWorksMobile from '../../ContainerLastWorks/mobile/ContainerLastWorksMobile'
import useReviews from '../useReviews'
import { Route, Switch } from 'react-router'
import { PAGE_REVIEWS, PAGE_REVIEWS_MOUTH, PAGE_REVIEWS_TODAY, PAGE_REVIEWS_WEEK } from 'constants/ROUTES'

const ContainerReviewsMobile = () => {
  const { items = [], headerData, tabs, pending } = useReviews()

  return (
  <>
    <BannerMobile
      {...headerData}
      addIcon={
        <IconCount
          count={items.length}
          texts={['запись', 'записи', 'записей']}
        />
      }
    />
    <SectionTabsMobile items={tabs} pending={pending} />
    <Switch>
      <Route
        path={PAGE_REVIEWS_TODAY}
        render={() => <SectionReviewsMobile title={'Работы за сегодня'} items={items} />}
      />
      <Route
        path={PAGE_REVIEWS_WEEK}
        render={() => <SectionReviewsMobile title={'Работы за неделю'} items={items} />}
      />
      <Route
        path={PAGE_REVIEWS_MOUTH}
        render={() => <SectionReviewsMobile title={'Работы за месяц'} items={items} />}
      />
      <Route
        path={PAGE_REVIEWS}
        render={() => <SectionReviewsMobile title={'Все работы'} items={items} />}
      />
    </Switch>
    <ContainerLastWorksMobile />
  </>
  )
}

export default React.memo(ContainerReviewsMobile)
