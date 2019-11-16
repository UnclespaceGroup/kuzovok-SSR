import React from 'react'
import SectionSideMenu from '../../components/SectionSideMenu/SectionSideMenu'
import { MdDirectionsCar, MdBuild, MdStoreMallDirectory, MdFormatAlignLeft, MdPhotoLibrary } from 'react-icons/md'

const ControllerSideMenu = () => (
  <SectionSideMenu
    icons={[
      {
        icon: <MdDirectionsCar />,
        text: 'Авто в ремонте',
        to: '/'
      },
      {
        icon: <MdBuild />,
        text: 'Услуги',
        to: '/'
      },
      {
        icon: <MdStoreMallDirectory />,
        text: 'О компании',
        to: '/'
      },
      {
        icon: <MdFormatAlignLeft />,
        text: 'Полезные статьи',
        to: '/'
      }
    ]}
    bottomIcon={{
      icon: <MdPhotoLibrary />,
      text: 'Медиа',
      to: '/'
    }}
  />
)

export default React.memo(ControllerSideMenu)
