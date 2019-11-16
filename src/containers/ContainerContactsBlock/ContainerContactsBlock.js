import React from 'react'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { MdAccessTime, MdLocationOn, MdPhone } from 'react-icons/md'
import { MAIN_PHONE } from '../../constants/phones'

const ContainerContactsBlock = () => {
  return (
    <SectionContacts
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

export default React.memo(ContainerContactsBlock)
