import { mainServices } from '../../constants/servicesData'
import { PAGE_SERVICES } from '../../constants/ROUTES'
import React from 'react'

const useHome = () => {
  const services = mainServices.map(item => ({
    ...item,
    img: item.banner,
    to: PAGE_SERVICES + item.id
  }))
    .slice(0, 5)
    .concat([{
      title: 'Другие',
      to: PAGE_SERVICES
    }])

  const bigBlockServices = {
    truckItems: mainServices.slice(0, 4).map(item => ({
      title: item.title,
      to: PAGE_SERVICES + item.id
    })
    ),
    passengerCarItems: mainServices.slice(0, 5).map(item => ({
      title: item.title,
      to: PAGE_SERVICES + item.id
    })
    )
  }

  const mainBanner = {
    title: 'Кузовок',
    img: 'https://avatars.mds.yandex.net/get-altay/239474/2a0000015debac50310cc28649dbbbd50215/XXL',
    text: <ul>
      <li>Наблюдайте за ходом ремонта вашего автомобиля на нашем сайте.</li>
      <li>Гарантия на выполненные работы 1.5 года.</li>
      <li>Оптимальное отношение цена - качество.</li>
    </ul>
  }

  return {
    services,
    bigBlockServices,
    mainBanner
  }
}
export default useHome
