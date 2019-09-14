import React from 'react'
import im from 'static/images/Pokraska-3.jpg'
import im1 from 'static/images/bba649u-960.jpg'
import SectionTextWithImage from '../../components/SectionTextWithImage/SectionTextWithImage'
import Padding from '../../components/Padding/Padding'
import SectionTextWithImageBlack from '../../components/SectionTextWithImageBlack/SectionTextWithImageBlack'
import SectionTable from '../../components/SectionTable/SectionTable'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'

const banner = {
  title: 'Покраска автомобилей',
  img: im,
  text: <ul>
    <li>Работа любой сложности</li>
    <li>Гарантия - полтора года</li>
    <li>Что то ещё</li>
  </ul>,
  sideBlock: <ControllerSideMenu />
}
const textBlock1 = {
  title: 'Интересный заголовок',
  img: im1,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
const table = {
  body: [
    ['Срок выполнения', '5дней'],
    ['Срок выполнения', '5дней'],
    ['Срок выполнения', '5дней'],
    ['Срок выполнения', '5дней'],
    ['Срок выполнения', '5дней']
  ]
}

const ContainerServiceDetail = () => (
  <>
    <SectionTopBanner {...banner} />
    <Padding value={64} />
    <SectionTextWithImage {...textBlock1} />
    <Padding value={64} />
    <SectionTextWithImageBlack {...textBlock1} />
    <Padding value={64} />
    <SectionTable table={table} />
    <Padding value={150} />
    <SectionContacts />
    <Padding value={100} />
  </>
)

export default React.memo(ContainerServiceDetail)