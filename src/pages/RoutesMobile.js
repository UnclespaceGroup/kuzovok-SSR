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
} from '../constants/ROUTES'
import PageReviewsMobile from './PageReviews/mobile/PageReviewsMobile'
import PageServiceDetailMobile from './PageServiceDetail/mobile/PageServiceDetailMobile'
import PageAboutDesktop from './PageAbout/desktop/PageAboutDesktop'
import PagePaperDesktop from './PagePaper/desktop/PagePaperDesktop'
import PagePaperDetailDesktop from './PagePaperDetail/desktop/PagePaperDetailDesktop'
import PageHomeMobile from './PageHome/mobile/PageHomeMobile'
import PageServiceMobile from './PageService/mobile/PageServiceMobile'
import PageWorkDetailMobile from './PageWorkDetail/mobile/PageWorkDetailMobile'
import PageWorksMobile from './PageWorks/mobile/PageWorksMobile'

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
      path={PAGE_SERVICES + ':id'}
    />
    <Route component={PageReviewsMobile} // Текущие работы
      path={PAGE_REVIEWS}
    />
    <Route component={PageWorksMobile} // Все работы
      path={PAGE_WORKS + ':slug'}
    />
    <Route component={PageWorkDetailMobile} // Деталка работы
      exact
      path={PAGE_WORK_DETAIL + ':id'}
    />
    <Route component={PageAboutDesktop} // О нас
      path={PAGE_ABOUT}
    />
    <Route component={PagePaperDesktop} // Статьи
      exact
      path={PAGE_PAPER}
    />
    <Route component={PagePaperDetailDesktop} // Статьи - деталка
      exact
      path={PAGE_PAPER_DETAIL}
    />
  </Switch>
)

export default RoutesMobile
