import useAxiosData from 'hooks/useAxiosData'
import { URL_CARDS, URL_SERVICE } from 'constants/serverURLs'
import _ from 'lodash'
import { PAGE_SERVICES } from 'constants/ROUTES'
import { getImagePath } from 'utils/getImagePath'

const useServices = () => {
  const { data: list } = useAxiosData({ url: URL_SERVICE })
  const { data: banner } = useAxiosData({ url: URL_CARDS, where: { id: 'page-services' }, single: true })

  const formatCards = _.map(list, item => ({
    ...item,
    banner: getImagePath(item.banner),
    to: PAGE_SERVICES + item.slug
  }))

  const mainCards = formatCards.filter(item => item.isMain)
  const cards = formatCards.filter(item => !item.isMain)

  const bannerData = {
    title: banner.title,
    img: getImagePath(banner.banner),
    text: banner.annotation
  }

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
    bannerData,
    cards
  }
}
export default useServices
