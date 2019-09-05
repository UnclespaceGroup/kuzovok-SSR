import React from 'react'
import SectionProductVideoBanner from '../../components/SectionProductVideoBanner/SectionProductVideoBanner'
import Padding from '../../components/Padding/Padding'
import SectionProductBannerTop from '../../components/SectionProductBannerTop/SectionProductBannerTop'

const banner = {
  videoId: 'GJAvbThKKro',
  text: '/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */'
}

const header = {
  title: 'Лада Приора'
}

const ContainerWorkDetail = () => (
  <>
    <SectionProductBannerTop {...header} />
    <Padding value={100} />
    <SectionProductVideoBanner {...banner} />
  </>
)

export default React.memo(ContainerWorkDetail)
