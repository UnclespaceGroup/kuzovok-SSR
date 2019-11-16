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
    }
  }
}

export default useServiceDetail
