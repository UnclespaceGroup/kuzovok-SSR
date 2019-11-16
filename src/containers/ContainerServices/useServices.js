import { useMemo, useState } from 'react'
import { mainServices, services } from '../../constants/servicesData'
import image from 'static/images/im4.jpg'
import { PAGE_SERVICES } from '../../constants/ROUTES'

const useServices = () => {
  const [ mainCards, setMainCards ] = useState({})
  const [ cards, setCards ] = useState({})
  useMemo(() => {
    setMainCards(mainServices.map(item => ({
      ...item,
      to: PAGE_SERVICES + item.id
    })))
    setCards(services.map(item => ({
      ...item,
      to: PAGE_SERVICES + item.id
    })))
  }, [])

  const bannerItems = [
    {
      title: 'Что то',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eum ex excepturi illum laboriosam, laborum minima minus nobis nostrum placeat quasi quisquam repellendus, sed suscipit ut vel veniam veritatis voluptatum!',
      img: image
    },
    {
      title: 'Что то',
      text: 'Что то',
      img: image
    },
    {
      title: 'Что то',
      text: 'Что то',
      img: image
    }
  ]

  return {
    mainCards, cards, bannerItems
  }
}
export default useServices
