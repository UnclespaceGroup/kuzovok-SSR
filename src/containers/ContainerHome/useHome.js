import { PAGE_SERVICES } from 'constants/ROUTES'
import React from 'react'
import _ from 'lodash'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import useAxiosData from 'hooks/useAxiosData'
import { URL_MAIN_PAGE_ADVANTAGES, SERVER_URL, URL_MAIN_PAGE_CARDS, URL_SERVICE } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'

const useHome = () => {
  const { data: servicesList = [] } = useAxiosData({ url: URL_SERVICE })
  const services = servicesList.map(item => ({
    img: getImagePath(item.banner),
    title: item.title
  })).concat({ title: 'Другие', to: PAGE_SERVICES, img: getImagePath(servicesList[0]?.banner) })

  const { data: mainCardList } = useAxiosData({ url: URL_MAIN_PAGE_CARDS })
  const mainCards = _.map(mainCardList, item => ({
    img: getImagePath(item.banner),
    title: item.title,
    text: item.text
  }))

  const { data: advantagesList } = useAxiosData({ url: URL_MAIN_PAGE_ADVANTAGES })
  const advantages = _.map(advantagesList, item => ({
    title: item.title,
    text: item.text,
    img: SERVER_URL + item.banner
  }))

  const sliderText = <div>
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
    mainBanner,
    advantages,
    mainSlider,
    mainCards
  }
}
export default useHome
