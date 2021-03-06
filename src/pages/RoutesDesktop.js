import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  PAGE_HOME,
  PAGE_ABOUT,
  PAGE_SERVICES,
  PAGE_WORKS,
  PAGE_WORK_DETAIL,
  PAGE_REVIEWS,
  PAGE_PAPER, PAGE_PAPER_DETAIL
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'
import PageServiceDesktop from './PageService/desktop/PageServiceDesktop'
import PageWorksDesktop from './PageWorks/desktop/PageWorksDesktop'
import PageWorkDetailDesktop from './PageWorkDetail/desktop/PageWorkDetailDesktop'
import PageAboutDesktop from './PageAbout/desktop/PageAboutDesktop'
import PageServiceDetailDesktop from './PageServiceDetail/desktop/PageServiceDetailDesktop'
import PageReviewsDesktop from './PageReviews/desktop/PageReviewsDesktop'
import PagePaperDetailDesktop from './PagePaperDetail/desktop/PagePaperDetailDesktop'
import PagePaperDesktop from './PagePaper/desktop/PagePaperDesktop'
import Page404Desktop from 'pages/Page404/Page404Desktop'

const RoutesDesktop = () => (
  <Switch>
    <Route component={PageHomeDesktop} // Главная страницв
      exact
      path={PAGE_HOME}
    />
    <Route component={PageServiceDesktop} // Услуги - разводящая
      exact
      path={PAGE_SERVICES}
    />
    <Route component={PageServiceDetailDesktop} // Услуги - деталка
      exact
      path={PAGE_SERVICES + ':slug'}
    />
    <Route component={PageReviewsDesktop} // Текущие работы
      path={PAGE_REVIEWS}
    />
    <Route component={PageWorksDesktop} // Все работы
      exact
      path={PAGE_WORKS}
    />
    <Route component={PageWorkDetailDesktop} // Деталка работы
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
    <Route component={Page404Desktop} path='*' />
  </Switch>
)

export default RoutesDesktop
