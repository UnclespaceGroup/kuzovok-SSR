import React from 'react'
import SectionSideMenu from '../../components/SectionSideMenu/SectionSideMenu'
import { MdDirectionsCar, MdBuild, MdStoreMallDirectory, MdFormatAlignLeft, MdPhotoLibrary } from 'react-icons/md'

const ControllerSideMenu = () => (
  <SectionSideMenu
    icons={[
      {
        icon: <MdDirectionsCar />,
        to: '/'
      },
      {
        icon: <MdBuild />,
        to: '/'
      },
      {
        icon: <MdStoreMallDirectory />,
        to: '/'
      },
      {
        icon: <MdFormatAlignLeft />,
        to: '/'
      }
    ]}
    bottomIcon={{
      icon: <MdPhotoLibrary />,
      to: '/'
    }}
  />
)

export default React.memo(ControllerSideMenu)
