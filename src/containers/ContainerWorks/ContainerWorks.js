import React, { useMemo, useState } from 'react'
import SectionProductBannerTop from '../../components/SectionProductBannerTop/SectionProductBannerTop'
import SectionCardsRow from '../../components/SectionCardsRow/SectionCardsRow'
import Padding from '../../components/Padding/Padding'
import { PAGE_WORKS } from '../../constants/ROUTES'
import { fetchDataList } from '../../axios/fetchData'
import _ from 'lodash'
import { getStatusByCode } from '../../utils/getNameByValue'

const header = {
  title: 'Все работы',
  text: <div>
    <p>Здесь вы можете ознакомиться с нашими работами</p>
  </div>
}

const ContainerWorks = () => {
  const [ items, setItems ] = useState([])
  const [ lastItems, setLastItems ] = useState([])
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
  return (
  <>
    <SectionProductBannerTop {...header} />
    <Padding value={80} />
    <SectionCardsRow title={'Последние'} items={lastItems} url={PAGE_WORKS} />
    <Padding value={120} />
    <SectionCardsRow count items={items} title={'Все работы'} url={PAGE_WORKS} />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerWorks)
