import React from 'react'
import Padding from '../../components/Padding/Padding'
import SectionGallery from '../../components/SectionGallery/SectionGallery'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { PAGE_WORKS } from '../../constants/ROUTES'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import im1 from '../../static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'

const header = {
  title: 'Лада Приора',
  status: 'В работе',
  img: im1,
  text: <ul>
    <li>Полная покраска автомобиля</li>
    <li>Замена заднего бампера</li>
  </ul>,
  sideBlock: <ControllerSideMenu />
}

const ContainerWorkDetail = () => (
  <>
    <SectionTopBanner backLink={PAGE_WORKS} {...header} />
    <Padding value={100} />
    <SectionGallery />
    <Padding value={150} />
    <SectionContacts />
  </>
)

export default React.memo(ContainerWorkDetail)
