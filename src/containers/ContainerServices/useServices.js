import { useMemo, useState } from 'react'
import { mainServices, services } from '../../constants/servicesData'
import { PAGE_SERVICES } from '../../constants/ROUTES'

const useServices = () => {
  const [ mainCards, setMainCards ] = useState({})
  const [ cards, setCards ] = useState({})
  useMemo(() => {
    setMainCards(mainServices.map(item => ({
      ...item,
      to: PAGE_SERVICES + item.id
    })))
    setCards(services.map((item, key) => ({
      ...item,
      to: PAGE_SERVICES + item.id
    })))
  }, [])

  const bannerItems = [
    {
      title: 'Кузовной ремонт без покраски',
      text: '',
      img: 'https://www.bmw-borishof.ru/upload/iblock/c39/c39af7edb07d59c97bba191edccb0d1d.jpg'
    },
    {
      title: 'Обработка кузова Раптором',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eum ex excepturi illum laboriosam, ',
      img: 'https://a.d-cd.net/e95a38as-960.jpg'
    },
    {
      title: 'Диагностика днища автомобиля',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eum ex excepturi illum laboriosam, ',
      img: 'https://marafet.pro/images/antikor-avto2.jpg'
    }
  ]

  return {
    mainCards, cards, bannerItems
  }
}
export default useServices
