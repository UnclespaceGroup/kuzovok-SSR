import React from 'react'
import { MdAccessTime, MdLocationOn, MdPhone } from 'react-icons/md'
import { MAIN_PHONE } from '../../../constants/contacts'
import SectionContactsMobile from '../../../components/SectionContacts/mobile/SectionContactsMobile'

const ContainerContactsBlockMobile = () => {
  return (
    <SectionContactsMobile
      items={[
        {
          icon: <MdLocationOn size={'2rem'} />,
          title: 'Сыктывкар, ул. Тентюковская, д.22'
        },
        {
          icon: <MdPhone size={'2rem'} />,
          title: MAIN_PHONE
        },
        {
          icon: <MdAccessTime size={'2rem'} />,
          title: 'Пн-Вс: 10:00 - 19:00'
        }
      ]}
    />
  )
}

export default React.memo(ContainerContactsBlockMobile)
