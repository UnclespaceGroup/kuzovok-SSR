import { mainServices } from 'constants/servicesData'
import { PAGE_SERVICES } from 'constants/ROUTES'
import React from 'react'
import { scrollWindowTo } from 'utils/scrollWindowTo'

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
      img: 'https://banner2.kisspng.com/20180807/jhs/kisspng-product-design-symbol-four-horsemen-mind-reading-magic-in-a-way-you-can-5b69dcbb2df758.2993787615336644431883.jpg',
      title: 'Будьте всегда в курсе',
      text: 'Наблюдайте за ходом ремонта вашего автомобиля на нашем сайте'
    },
    {
      img: 'https://img2.freepng.ru/20180611/rtq/kisspng-quality-assurance-quality-control-computer-icons-5b1ed10fb272e8.5517921515287462557309.jpg',
      title: 'Предоставляем гарантию',
      text: 'Гарантия на выполненные работы 1.5 года'
    },
    {
      img: 'data:image/png;base64,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',
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
