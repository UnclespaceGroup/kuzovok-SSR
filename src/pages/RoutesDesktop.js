import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  PAGE_HOME,
  PAGE_ABOUT,
  PAGE_SERVICES,
  PAGE_WORKS,
  PAGE_WORK_DETAIL,
  PAGE_ABOUT_REVIEWS,
  PAGE_ABOUT_US,
  PAGE_WORKS_CURRENT,
  PAGE_PAPER, PAGE_PAPER_DETAIL
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'
import PageServiceDesktop from './PageService/desktop/PageServiceDesktop'
import PageWorksDesktop from './PageWorks/desktop/PageWorksDesktop'
import PageWorkDetailDesktop from './PageWorkDetail/desktop/PageWorkDetailDesktop'
import PageAboutDesktop from './PageAbout/desktop/PageAboutDesktop'
import PageServiceDetailDesktop from './PageServiceDetail/desktop/PageServiceDetailDesktop'
import PageWorksCurrentDesktop from './PageWorksCurrent/desktop/PageWorksCurrentDesktop'
import PageAboutContactsDesktop from './PageAboutContacts/desktop/PageAboutContactsDesktop'
import PageAboutReviewsDesktop from './PageAboutReviews/desktop/PageAboutReviewsDesktop'
import PagePaperDetailDesktop from './PagePaperDetail/desktop/PagePaperDetailDesktop'
import PagePaperDesktop from './PagePaper/desktop/PagePaperDesktop'

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
      path={PAGE_SERVICES + ':id'}
    />
    <Route component={PageWorksCurrentDesktop} // Текущие работы
      exact
      path={PAGE_WORKS_CURRENT}
    />
    <Route component={PageWorksDesktop} // Все работы
      exact
      path={PAGE_WORKS}
    />
    <Route component={PageWorkDetailDesktop} // Деталка работы
      exact
      path={PAGE_WORK_DETAIL}
    />
    {/* <Route component={PageWorkDetailDayDesktop} // Деталка работы - отчет по дням */}
    {/*  exact */}
    {/*  path={PAGE_WORK_DETAIL_DAYS} */}
    {/* /> */}
    <Route component={PageAboutContactsDesktop} // О нас - контактная информация
      exact
      path={PAGE_ABOUT}
    />
    <Route component={PageAboutDesktop} // О нас
      exact
      path={PAGE_ABOUT_US}
    />
    <Route component={PageAboutReviewsDesktop} // О нас - отзывы
      exact
      path={PAGE_ABOUT_REVIEWS}
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

export default RoutesDesktop
