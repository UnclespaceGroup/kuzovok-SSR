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
  PAGE_ABOUT_PHOTOS,
  PAGE_ABOUT_VIDEO
} from 'constants/ROUTES'
import useAboutContacts from '../useAboutContacts'
import SectionAboutPhotos from 'components/SectionAboutPhotos/SectionAboutPhotos'
import useAboutPhotos from '../useAboutPhotos'
import SectionHowFind from 'components/SectionHowFind/desktop/SectionHowFind'
import SectionAboutVideo from 'components/SectionAboutVideo/desktop/SectionAboutVideo'
import useAboutVideos from '../useAboutVideos'

const ContainerAbout = () => {
  const { bannerData, items: itemsTabs } = useAbout()
  const { data: dataContacts } = useAboutContacts()
  const { data: dataPhotos } = useAboutPhotos()
  const { data: dataVideos } = useAboutVideos()
  return (
  <>
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
        path={PAGE_ABOUT_VIDEO}
        render={() => <SectionAboutVideo {...dataVideos} />}
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
