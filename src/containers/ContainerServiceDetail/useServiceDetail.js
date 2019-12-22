import { mainServices, services } from 'constants/servicesData'
import _ from 'lodash'
import im1 from '../../static/images/bba649u-960.jpg'

const useServiceDetail = ({ params }) => {
  const { id } = params
  const currentData = _.find(mainServices.concat(services), item => item.id === id)
  const textBlock1 = {
    title: 'Интересный заголовок',
    img: im1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
  return {
    textBlock1,
    bannerData: {
      ...currentData?.bannerData,
      title: currentData?.title,
      img: currentData?.banner
    },
    content: currentData?.content,
    videos: [{
      title: 'Обзор покрасочной камеры',
      text: 'Lorem ipsum sit dolar Lorem ipsum sit dolar Lorem ipsum sit dolar Lorem ipsum sit dolar',
      video: 'oCJIUBf01Z0'
    }]
  }
}

export default useServiceDetail
