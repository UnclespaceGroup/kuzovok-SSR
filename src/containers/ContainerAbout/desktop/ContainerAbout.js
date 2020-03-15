import React from 'react'
import useAbout from '../useAbout'
import Padding from 'components/Padding/Padding'
import Banner from 'components/Banner/desktop/Banner'
import SectionTabs from 'components/SectionTabs/desktop/SectionTabs'
import { Route, Switch } from 'react-router'
import SectionAboutContacts from 'components/SectionAboutContacts/desktop/SectionAboutContacts'
import {
  PAGE_ABOUT,
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS
} from 'constants/ROUTES'
import useAboutContacts from '../useAboutContacts'
import SectionAboutPhotos from 'components/SectionAboutPhotos/desktop/SectionAboutPhotos'
import useAboutPhotos from '../useAboutPhotos'
import SectionHowFind from 'components/SectionHowFind/desktop/SectionHowFind'
import ContainerHelmet from '../../ContainerHelmet/ContainerHelmet'

const ContainerAbout = () => {
  const { bannerData, items: itemsTabs, helmetData } = useAbout()
  const dataContacts = useAboutContacts()
  const { data: dataPhotos } = useAboutPhotos()
  return (
  <>
    <ContainerHelmet {...helmetData} />
    <Banner {...bannerData} />
    <SectionTabs items={itemsTabs} />
    <Padding value={60} />
    <Switch>
      <Route
        exact
        path={PAGE_ABOUT}
        render={() => <SectionAboutContacts {...dataContacts} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_PHOTOS}
        render={() => <SectionAboutPhotos {...dataPhotos} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_MAP}
        render={() => <SectionHowFind />}
      />
    </Switch>
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerAbout)
