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

  const { data: mainSliderList = [] } = useAxiosData({ url: URL_SLIDES, where: { type: 'mainPage' } })
  const mainSlider = mainSliderList.map(item => ({
    title: item.title,
    text: item.text,
    onClick: () => scrollWindowTo('toThis'),
    img: getImagePath(item.banner)
  }))

  return {
    services,
    advantages,
    mainSlider,
    mainCards
  }
}
export default useHome
