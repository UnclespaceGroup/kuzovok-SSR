import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  PAGE_HOME,
  PAGE_ABOUT,
  PAGE_SERVICE,
  PAGE_WORKS,
  PAGE_WORK_DETAIL
} from 'constants/ROUTES'
import PageHomeDesktop from './PageHome/desktop/PageHomeDesktop'
import PageServiceDesktop from './PageService/desktop/PageServiceDesktop'
import PageWorksDesktop from './PageWorks/desktop/PageWorksDesktop'
import PageWorkDetailDesktop from './PageWorkDetail/desktop/PageWorkDetailDesktop'
import PageAboutDesktop from './PageAbout/desktop/PageAboutDesktop'

const RoutesDesktop = () => (
  <Switch>
    <Route component={PageHomeDesktop}
      exact
      path={PAGE_HOME}
    />
    <Route component={PageServiceDesktop}
      exact
      path={PAGE_SERVICE + ':id'}
    />
    <Route component={PageWorksDesktop}
      exact
      path={PAGE_WORKS}
    />
    <Route component={PageWorkDetailDesktop}
      exact
      path={PAGE_WORK_DETAIL}
    />
    <Route component={PageAboutDesktop}
      exact
      path={PAGE_ABOUT}
    />
  </Switch>
)

export default RoutesDesktop
