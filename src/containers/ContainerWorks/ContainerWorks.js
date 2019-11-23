import React from 'react'
import _ from 'lodash'
import Banner from '../../components/Banner/Banner'
import Padding from '../../components/Padding/Padding'
import useWorks from './useWorks'
import SectionTabs from '../../components/SectionTabs/SectionTabs'
import { Route, Switch } from 'react-router'
import SectionWorks from '../../components/SectionWorks/SectionWorks'

const ContainerWorks = () => {
  const { header, tabs, ...works } = useWorks()
  return (
  <>
    <Banner {...header} />
    <SectionTabs items={tabs} />
    <Padding value={80} />
    <Switch>
      {
        _.map(tabs, (tab, key) => (
          <Route
            key={key}
            path={tab.to}
            render={() => <SectionWorks {...works} />}
          />
        ))
      }
    </Switch>
    <Padding value={80} />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerWorks)
