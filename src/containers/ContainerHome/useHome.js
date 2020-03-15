import { PAGE_SERVICES } from 'constants/ROUTES'
import _ from 'lodash'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import useAxiosData from 'hooks/useAxiosData'
import {
  URL_MAIN_PAGE_ADVANTAGES,
  SERVER_URL,
  URL_MAIN_PAGE_CARDS,
  URL_SERVICE,
  URL_SLIDES
} from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'
import { axiosLocal } from 'axiosFetch/fetchData'
import { useEffect, useState } from 'react'

const useHome = () => {
  const [text, setText] = useState()
  const { data: servicesList = [] } = useAxiosData({ url: URL_SERVICE })

  const services = servicesList.map(item => ({
    img: getImagePath(item.banner),
    title: item.title,
    to: PAGE_SERVICES + item.slug
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

  const { data: mainSliderList = [] } = useAxiosData({ url: URL_SLIDES, where: { type: 'mainPage' } })
  const mainSlider = mainSliderList.map(item => ({
    title: item.title,
    text: item.text,
    onClick: () => scrollWindowTo('toThis'),
    img: getImagePath(item.banner)
  }))

  useEffect(() => {
    async function getText () {
      try {
        const { data } = await axiosLocal.get('/server/mainPageData.json')
        setText(data?.text)
      } catch (e) {
        console.error(e)
      }
    }
    getText()
  }, [])

  const helmetData = {
    title: 'Кузовок 🚘 - Станция кузовного ремонта',
    description: `Станция кузовного ремонта в Сыктывкаре.
     Предоставляем большой спектр услуг, таких как профессиональная покраска автомобиля,
      кузовной ремонт, и многое другое.
     Следите за статусом работы на нашем сайте.`
  }

  return {
    helmetData,
    services,
    advantages,
    mainSlider,
    mainCards,
    text
  }
}
export default useHome
