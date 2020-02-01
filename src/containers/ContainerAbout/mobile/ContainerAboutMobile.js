import React from 'react'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import SectionAboutContactsMobile from 'components/SectionAboutContacts/mobile/SectionAboutContactsMobile'
import SectionHowFindMobile from 'components/SectionHowFind/mobile/SectionHowFindMobile'
import SectionTabsMobile from 'components/SectionTabs/mobile/SectionTabsMobile'
import useAbout from '../useAbout'
import Padding from 'components/Padding/Padding'
import { Route, Switch } from 'react-router'
import {
  PAGE_ABOUT,
  PAGE_ABOUT_MAP,
  PAGE_ABOUT_PHOTOS
} from 'constants/ROUTES'
import useAboutContacts from '../useAboutContacts'
import useAboutPhotos from '../useAboutPhotos'
import SectionAboutPhotosMobile from 'components/SectionAboutPhotos/mobile/SectionAboutPhotosMobile'

const ContainerAboutMobile = () => {
  const { bannerData, items: itemsTabs } = useAbout()
  const { data: dataContacts } = useAboutContacts()
  const { data: dataPhotos } = useAboutPhotos()
  return (
  <>
    <BannerMobile {...bannerData} />
    <SectionTabsMobile items={itemsTabs} />
    <Padding value={60} />
    <Switch>
      <Route
        exact
        path={PAGE_ABOUT}
        render={() => <SectionAboutContactsMobile {...dataContacts} />}
      />
      <Route
        exact
        path={PAGE_ABOUT_PHOTOS}
        render={() => <SectionAboutPhotosMobile {...dataPhotos} />}
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
