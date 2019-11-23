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
import PageWorksCurrentDesktop from './PageWorksCurrent/desktop/PageWorksCurrentDesktop'
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
      path={PAGE_REVIEWS}
    />
    <Route component={PageWorksDesktop} // Все работы
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
  </Switch>
)

export default RoutesDesktop
