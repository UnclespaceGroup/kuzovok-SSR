import { useMemo, useState } from 'react'
import { fetchDataList } from '../../axios/fetchData'
import _ from 'lodash'
import { getStatusByCode } from '../../utils/getNameByValue'
import photo from 'static/images/Pokraska-3.jpg'

const useWorks = () => {
  const [ items, setItems ] = useState([])
  const [ lastItems, setLastItems ] = useState([])

  const header = {
    title: 'Все работы',
    text: 'Здесь вы можете ознакомиться с нашими работами',
    img: photo
  }

  const tabs = [
    {
      title: 'Последние',
      to: '/'
    },
    {
      title: 'Покраска',
      to: '/'
    },
    {
      title: 'Кузовной ремонт',
      to: '/'
    },
    {
      title: 'Покрытие актигравием',
      to: '/'
    },
    {
      title: 'Фильтр',
      to: '/'
    }
  ]

  useMemo(() => {
    fetchDataList(`/work/`)
      .then(data => {
        const items = _.map(data, item => ({
          ...item,
          text: item.annotation,
          img: item.banner,
          subtitle: getStatusByCode(item.status),
          date: item.createdAt
        }))
        setItems(items)
        setLastItems(items.slice(0, 3))
      })
  }, [])

  return {
    header,
    items,
    lastItems,
    tabs
  }
}

export default useWorks
