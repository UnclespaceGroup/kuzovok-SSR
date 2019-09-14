import React from 'react'
import SectionService from '../../components/SectionService/SectionService'
import img from 'static/images/allfons.jpg'
import img1 from 'static/images/avtomobilnyy-torgovyy-kompleks-angar-avto-sc-144595446-6.jpg'
import img2 from 'static/images/pic-paint.png'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'

const ContainerService = () => (
  <SectionService
    banner={{
      title: 'Каталог услуг',
      text: 'Воспользуйтесь нашим поиском либо просмотрите весть каталог',
      img: img,
      sideBlock: <ControllerSideMenu />
    }}
    mainCards={{
      items: [
        {
          img: img1,
          title: 'Покраска автомобиля',
          text: 'Lorem ipsub dolal Lorem ipsub dolal Lorem ipsub dolal Lorem ipsub dolal',
          to: '/'
        },
        {
          img: img1,
          title: 'Покраска автомобиля',
          text: 'Lorem ipsub dolal Lorem ipsub dolal Lorem ipsub dolal Lorem ipsub dolal',
          to: '/'
        },
        {
          img: img1,
          title: 'Покраска автомобиля',
          text: 'Lorem ipsub dolal Lorem ipsub dolal Lorem ipsub dolal Lorem ipsub dolal',
          to: '/'
        }
      ]
    }}
    cards={{
      items: [
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        },
        {
          img: img2,
          title: 'Покраска автомобиля',
          to: '/'
        }
      ]
    }}
  />
)

export default React.memo(ContainerService)
