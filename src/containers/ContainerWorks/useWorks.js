import { useMemo, useState } from 'react'
import { fetchDataList } from '../../axios/fetchData'
import _ from 'lodash'
import { getStatusByCode } from '../../utils/getNameByValue'
import photo from 'static/images/Pokraska-3.jpg'
import { PAGE_WORKS } from '../../constants/ROUTES'

const useWorks = () => {
  const [ items, setItems ] = useState([])
  const [ lastItems ] = useState([])

  const header = {
    title: 'Все работы',
    text: 'Здесь вы можете ознакомиться с нашими работами',
    img: photo
  }

  const tabs = [
    {
      title: 'Последние',
      to: PAGE_WORKS + 'last'
    },
    {
      title: 'Покраска',
      to: PAGE_WORKS + 'pokraska'
    },
    {
      title: 'Кузовной ремонт',
      to: PAGE_WORKS + 'kuzovnoy-remont'
    },
    {
      title: 'Покрытие актигравием',
      to: PAGE_WORKS + 'antigraviy'
    },
    {
      title: 'Все работы',
      to: PAGE_WORKS
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
