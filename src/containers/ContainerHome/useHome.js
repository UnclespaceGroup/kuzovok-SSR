import { PAGE_SERVICES } from 'constants/ROUTES'
import _ from 'lodash'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import useAxiosData from 'hooks/useAxiosData'
import {
  URL_SERVICE,
  URL_SLIDES, URL_CARDS, URL_DATA
} from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'

const useHome = () => {
  const { data: servicesList = [] } = useAxiosData({ url: URL_SERVICE })

  const { data: { text } } = useAxiosData({ url: URL_DATA, where: { id: 'mainPageText' }, single: true })

  const services = _.map(servicesList, item => ({
    img: getImagePath(item.banner),
    title: item.title,
    to: PAGE_SERVICES + item.slug
  })).concat({ title: 'Другие', to: PAGE_SERVICES, img: getImagePath(servicesList[0]?.banner) })

  const { data: mainCardList } = useAxiosData({ url: URL_CARDS, where: { type: 'mainPageCard' } })
  const mainCards = _.map(mainCardList, item => ({
    img: getImagePath(item.banner),
    title: item.title,
    text: item.annotation
  }))

  const { data: advantagesList } = useAxiosData({ url: URL_CARDS, where: { type: 'advantagesCard' } })
  const advantages = _.map(advantagesList, item => ({
    title: item.title,
    text: item.annotation,
    img: getImagePath(item.banner)
  }))

  const { data: mainSliderList = [] } = useAxiosData({ url: URL_SLIDES })
  const mainSlider = _.map(mainSliderList, item => ({
    title: item.title,
    text: item.text,
    onClick: () => scrollWindowTo('toThis'),
    img: getImagePath(item.banner)
  }))

  const helmetData = {
    title: 'Кузовок 🚘 - Станция кузовного ремонта',
    description: `Станция кузовного ремонта в Сыктывкаре.
     Предоставляем большой спектр услуг, таких как профессиональная покраска автомобиля,
      кузовной ремонт, и многое другое.
     Следите за статусом работы на нашем сайте.`
  }

  console.log(text)
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
