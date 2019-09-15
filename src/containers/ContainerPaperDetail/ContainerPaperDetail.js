import React from 'react'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import img from '../../static/images/allfons.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import Layout from '../../components/Layout/Layout'
import Padding from '../../components/Padding/Padding'
import { MdVideoLibrary, MdAccessTime } from 'react-icons/md'
import TextIcon from '../../components/TextIcon/TextIcon'
import SectionContacts from '../../components/SectionContacts/SectionContacts'

const ContainerPaperDetail = () => (
  <>
    <SectionTopBanner
      {...{
        title: 'Правка кузова',
        text: 'Как поправить, чтоб шикарно было',
        img: img,
        sideBlock: <ControllerSideMenu />
      }}
    >
      <TextIcon icon={<MdAccessTime />}>Время чтения 5 минут</TextIcon>
      <TextIcon to={'/'} icon={<MdVideoLibrary />}>Видео</TextIcon>
    </SectionTopBanner>
    <Layout>
      <Padding value={120} />
    </Layout>
    <SectionContacts />
    <Padding value={120} />
  </>
)

export default React.memo(ContainerPaperDetail)
