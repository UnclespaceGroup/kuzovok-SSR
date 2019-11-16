import { mainServices } from '../../constants/servicesData'
import { PAGE_SERVICES } from '../../constants/ROUTES'

const useHome = () => {
  const services = mainServices.map(item => ({
    ...item,
    img: item.banner,
    to: PAGE_SERVICES + item.id
  }))
    .slice(0, 5)
    .concat([{
      title: 'Другие',
      to: PAGE_SERVICES
    }])

  const bigBlockServices = {
    truckItems: mainServices.slice(0, 4).map(item => ({
      title: item.title,
      to: PAGE_SERVICES + item.id
    })
    ),
    passengerCarItems: mainServices.slice(0, 5).map(item => ({
      title: item.title,
      to: PAGE_SERVICES + item.id
    })
    )
  }

  return {
    services,
    bigBlockServices
  }
}
export default useHome
