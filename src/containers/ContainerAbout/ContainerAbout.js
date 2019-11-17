import React from 'react'
import useAbout from './useAbout'
import Padding from '../../components/Padding/Padding'
import Banner from '../../components/Banner/Banner'
import useAboutMain from './useAboutMain'
import SectionAboutMain from '../../components/SectionAboutMain/SectionAboutMain'
import SectionTabs from '../../components/SectionTabs/SectionTabs'
import { Route, Switch } from 'react-router'
import SectionAboutContacts from '../../components/SectionAboutContacts/SectionAboutContacts'
import {
  PAGE_ABOUT,
  PAGE_ABOUT_CONTACTS,
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS,
  PAGE_ABOUT_VIDEO
} from '../../constants/ROUTES'
import useAboutContacts from './useAboutContacts'
import SectionAboutPhotos from '../../components/SectionAboutPhotos/SectionAboutPhotos'
import useAboutPhotos from './useAboutPhotos'

const ContainerAbout = () => {
  const { bannerData, items: itemsTabs } = useAbout()
  const { data: dataMain } = useAboutMain()
  const { data: dataContacts } = useAboutContacts()
  const { data: dataPhotos } = useAboutPhotos()
  return (
  <>
    <Banner {...bannerData} />
    <SectionTabs items={itemsTabs} />
    <Padding value={60} />
    <Switch>
      <Route
        exact
        path={PAGE_ABOUT}
        render={() => <SectionAboutMain {...dataMain} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_CONTACTS}
        render={() => <SectionAboutContacts {...dataContacts} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_PHOTOS}
        render={() => <SectionAboutPhotos {...dataPhotos} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_VIDEO}
        render={() => <SectionAboutPhotos {...dataPhotos} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_MAP}
        render={() => <SectionAboutPhotos {...dataPhotos} />}
      />
    </Switch>
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerAbout)
