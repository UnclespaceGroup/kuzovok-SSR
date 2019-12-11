import { mainServices, services } from 'constants/servicesData'
import _ from 'lodash'

const useServiceDetail = ({ params }) => {
  const { id } = params
  const currentData = _.find(mainServices.concat(services), item => item.id === id)
  return {
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
