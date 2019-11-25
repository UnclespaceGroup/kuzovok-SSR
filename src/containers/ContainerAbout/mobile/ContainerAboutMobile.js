import React from 'react'
import BannerMobile from '../../../components/Banner/mobile/BannerMobile'
import SectionAboutContactsMobile from '../../../components/SectionAboutContacts/mobile/SectionAboutContactsMobile'
import SectionAboutMainMobile from '../../../components/SectionAboutMain/mobile/SectionAboutMainMobile'
import SectionAboutVideoMobile from '../../../components/SectionAboutVideo/mobile/SectionAboutVideoMobile'
import SectionHowFindMobile from '../../../components/SectionHowFind/mobile/SectionHowFindMobile'
import SectionTabsMobile from '../../../components/SectionTabs/mobile/SectionTabsMobile'
import useAbout from '../useAbout'
import Padding from '../../../components/Padding/Padding'
import useAboutMain from '../useAboutMain'
import { Route, Switch } from 'react-router'
import {
  PAGE_ABOUT,
  PAGE_ABOUT_CONTACTS,
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS,
  PAGE_ABOUT_VIDEO
} from '../../../constants/ROUTES'
import useAboutContacts from '../useAboutContacts'
import SectionAboutPhotos from '../../../components/SectionAboutPhotos/SectionAboutPhotos'
import useAboutPhotos from '../useAboutPhotos'
import useAboutVideos from '../useAboutVideos'

const ContainerAboutMobile = () => {
  const { bannerData, items: itemsTabs } = useAbout()
  const { data: dataMain } = useAboutMain()
  const { data: dataContacts } = useAboutContacts()
  const { data: dataPhotos } = useAboutPhotos()
  const { data: dataVideos } = useAboutVideos()
  return (
  <>
    <BannerMobile {...bannerData} />
    <SectionTabsMobile items={itemsTabs} />
    <Padding value={60} />
    <Switch>
      <Route
        exact
        path={PAGE_ABOUT}
        render={() => <SectionAboutMainMobile {...dataMain} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_CONTACTS}
        render={() => <SectionAboutContactsMobile {...dataContacts} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_PHOTOS}
        render={() => <SectionAboutPhotos {...dataPhotos} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_VIDEO}
        render={() => <SectionAboutVideoMobile {...dataVideos} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_MAP}
        render={() => <SectionHowFindMobile />}
      />
    </Switch>
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerAboutMobile)
