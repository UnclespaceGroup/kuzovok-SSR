import { mainServices } from 'constants/servicesData'
import { PAGE_SERVICES } from 'constants/ROUTES'
import React from 'react'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import icon1 from 'static/icons/kus-homework.svg'
import icon2 from 'static/icons/kus-check.svg'
import icon3 from 'static/icons/kus-hand.svg'

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

  const advantages = [
    {
      img: icon1,
      title: 'Будьте всегда в курсе',
      text: 'Наблюдайте за ходом ремонта вашего автомобиля на нашем сайте'
    },
    {
      img: icon2,
      title: 'Предоставляем гарантию',
      text: 'Гарантия на выполненные работы 1.5 года'
    },
    {
      img: icon3,
      title: 'Профессиональная работа',
      text: 'Оптимальное отношение цена - качество'
    }
  ]

  const sliderText = <div>
    <p>Оптимальное соотношение цена-качество</p>
    <p>Наблюдай за ходом ремонта через сайт</p>
    <p>Гарантия на работы 1,5 года</p>
  </div>

  const mainSlider = [
    {
      img: 'http://car-pr.com/upload/resize_cache/iblock/b1d/620_410_2/b1db875296578f55db900dd213cb9d4d.jpg',
      title: 'Сервисный центр Кузовок',
      text: sliderText,
      onClick: () => scrollWindowTo('toThis')
    },
    {
      img: 'https://avatars.mds.yandex.net/get-altay/224414/2a0000015f65f3492856faf2296ca18a9a0e/XXL',
      title: 'Сервисный центр Кузовок',
      text: sliderText,
      onClick: () => scrollWindowTo('toThis')
    },
    {
      img: 'https://www.porsche-voronezh.ru/files/9457/1_%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81.jpg',
      title: 'Сервисный центр Кузовок',
      text: sliderText,
      onClick: () => scrollWindowTo('toThis')
    }
  ]

  const mainBanner = {
    title: 'Кузовок',
    img: 'https://avatars.mds.yandex.net/get-altay/239474/2a0000015debac50310cc28649dbbbd50215/XXL',
    text: <p>
      Сревистный центр
    </p>
  }

  return {
    services,
    bigBlockServices,
    mainBanner,
    advantages,
    mainSlider
  }
}
export default useHome
