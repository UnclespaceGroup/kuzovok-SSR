import React from 'react'
import SectionProductVideoBanner from '../../components/SectionProductVideoBanner/SectionProductVideoBanner'
import Padding from '../../components/Padding/Padding'
import SectionProductBannerTop from '../../components/SectionProductBannerTop/SectionProductBannerTop'
import SectionGallery from '../../components/SectionGallery/SectionGallery'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { PAGE_WORKS } from '../../constants/ROUTES'

const banner = {
  videoId: 'GJAvbThKKro',
  text: '/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */'
}

const header = {
  title: 'Лада Приора',
  text: <ul>
    <li>Полная покраска автомобиля</li>
    <li>Замена заднего бампера</li>
  </ul>
}

const ContainerWorkDetail = () => (
  <>
    <SectionProductBannerTop backLink={PAGE_WORKS} {...header} />
    <Padding value={100} />
    <SectionProductVideoBanner {...banner} />
    <Padding value={100} />
    <SectionGallery />
    <Padding value={150} />
    <SectionContacts />
  </>
)

export default React.memo(ContainerWorkDetail)
