import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE, SERVER_URL } from 'constants/serverURLs'
import _ from 'lodash'
import { PAGE_SERVICES } from 'constants/ROUTES'

const useServices = () => {
  const { data: list } = useAxiosData({ url: URL_SERVICE })

  const formatCards = _.map(list, item => ({
    ...item,
    banner: SERVER_URL + item.banner,
    to: PAGE_SERVICES + item.slug
  }))

  const mainCards = formatCards.filter(item => item.isMain)
  const cards = formatCards.filter(item => !item.isMain)

  const bannerItems = formatCards.filter(item => item.isBanner).map(item => ({
    title: item.title,
    img: item.banner,
    text: item.annotation,
    url: PAGE_SERVICES + item.slug
  }))

  const helmetData = {
    title: 'Каталог услуг | Станция кузовного ремонта Кузовок',
    description: `
Станция предлагаем огромный спектр услуг по кузовному ремонту и кузовной обработке автомобиля,
такие как ${mainCards.map(item => item.title).join(', ')},
а также следующие дополнительные услуги: ${cards.map(item => item.title).join(', ')} 
    `
  }

  return {
    helmetData,
    mainCards,
    bannerItems,
    cards
  }
}
export default useServices
