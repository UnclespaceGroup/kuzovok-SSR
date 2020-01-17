// packages
import React from 'react'
import { Route, Switch } from 'react-router'
import {
  PAGE_ABOUT,
  PAGE_HOME,
  PAGE_PAPER, PAGE_PAPER_DETAIL,
  PAGE_REVIEWS,
  PAGE_SERVICES,
  PAGE_WORK_DETAIL,
  PAGE_WORKS
} from 'constants/ROUTES'
import PageAboutMobile from 'pages/PageAbout/mobile/PageAboutMobile'
import PageReviewsMobile from 'pages/PageReviews/mobile/PageReviewsMobile'
import PageServiceDetailMobile from 'pages/PageServiceDetail/mobile/PageServiceDetailMobile'
import PageHomeMobile from 'pages/PageHome/mobile/PageHomeMobile'
import PageServiceMobile from 'pages/PageService/mobile/PageServiceMobile'
import PageWorkDetailMobile from 'pages/PageWorkDetail/mobile/PageWorkDetailMobile'
import PageWorksMobile from 'pages/PageWorks/mobile/PageWorksMobile'
import PagePaperMobile from 'pages/PagePaper/mobile/PagePaperMobile'
import PagePaperDetailMobile from 'pages/PagePaperDetail/mobile/PagePaperDetailMobile'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeMobile} // Главная страницв
      exact
      path={PAGE_HOME}
    />
    <Route component={PageServiceMobile} // Услуги - разводящая
      exact
      path={PAGE_SERVICES}
    />
    <Route component={PageServiceDetailMobile} // Услуги - деталка
      exact
      path={PAGE_SERVICES + ':slug'}
    />
    <Route component={PageReviewsMobile} // Текущие работы
      path={PAGE_REVIEWS}
    />
    <Route component={PageWorksMobile} // Все работы
      exact
      path={PAGE_WORKS}
    />
    <Route component={PageWorkDetailMobile} // Деталка работы
      exact
      path={PAGE_WORK_DETAIL + ':id'}
    />
    <Route component={PageAboutMobile} // О нас
      path={PAGE_ABOUT}
    />
    <Route component={PagePaperMobile} // Статьи
      exact
      path={PAGE_PAPER}
    />
    <Route component={PagePaperDetailMobile} // Статьи - деталка
      exact
      path={PAGE_PAPER_DETAIL}
    />
  </Switch>
)

export default RoutesMobile
