import React from 'react'
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md'
import { useSelector } from 'react-redux'

const useContactsBlock = () => {
  const { address, phone, workTime, mail, vk } = useSelector(state => state.contacts)
  const items = [
    {
      icon: <MdLocationOn size={'2rem'} />,
      title: address
    },
    {
      icon: <MdPhone size={'2rem'} />,
      title: <a href={`tel:${phone}`}>{phone}</a>
    },
    {
      icon: <MdAccessTime size={'2rem'} />,
      title: workTime
    }
  ]
  return {
    items,
    mail,
    vk
  }
}
export default useContactsBlock
