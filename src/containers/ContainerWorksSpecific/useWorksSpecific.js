import { useMemo, useState } from 'react'
import _ from 'lodash'
import { getStatusByCode } from 'utils/getNameByValue'
import photo from 'static/images/Pokraska-3.jpg'
import { PAGE_WORKS } from 'constants/ROUTES'
import { fetchDataListParams } from '../../axios/fetchData'
import carIcon from 'static/images/car-icon.png'

const slugs = [
  {
    id: 0,
    slug: 'last',
    title: 'Последние',
    params: { limit: 6 }
  },
  {
    id: 1,
    slug: 'svarochnye-raboty',
    title: 'Сварочные работы',
    params: { where: { type: 1 } }
  },
  {
    id: 2,
    slug: 'pokraska',
    title: 'Покраска',
    params: { where: { type: 2 } }
  },
  {
    id: 3,
    slug: 'kuzovnoy-remont',
    title: 'Кузовной ремонт',
    params: { where: { type: 3 } }
  },
  {
    id: 4,
    slug: 'obrabotka-porogov-i-dnisha',
    title: 'Обработка порогов',
    params: { where: { type: 4 } }
  }
]

const useWorksSpecific = ({ params = {} }) => {
  const { slug } = params
  const [ items, setItems ] = useState([])
  const [ lastItems ] = useState([])
  const [ pending, setPending ] = useState(false)

  const header = {
    icon: carIcon,
    title: 'Машины в ремонте',
    text: '',
    img: photo
  }

  const typeTabs = _.map(slugs, item => ({
    title: item.title,
    to: PAGE_WORKS + item.slug
  }))

  const tabs = [].concat(
    typeTabs,
    [{
      title: 'Все работы',
      to: PAGE_WORKS + 'all'
    }]
  )

  useMemo(() => {
    const typeId = slugs.find(item => item.slug === slug)
    setPending(true)
    fetchDataListParams(`/work/`, typeId && {
      params: { ...typeId.params }
    })
      .then(data => {
        const items = _.map(data, item => ({
          ...item,
          text: item.annotation,
          img: item.banner,
          subtitle: getStatusByCode(item.status),
          date: item.createdAt
        }))
        setPending(false)
        setItems(items)
      })
      .catch(e => {
        setPending(false)
      })
  }, [params])

  return {
    header,
    items,
    lastItems,
    tabs,
    pending
  }
}

export default useWorksSpecific
