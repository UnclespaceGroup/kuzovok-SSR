import React, { useState, useMemo } from 'react'
import SectionCardsRow from '../../components/SectionCardsRow/SectionCardsRow'
import useLastWorks from './useLastWorks'
import BgColor from '../../components/BgColor/BgColor'
import Padding from '../../components/Padding/Padding'

const ContainerLastWorks = () => {
  const [ items, setItems ] = useState([])
  useMemo(() => {
    useLastWorks()
      .then(data => {
        setItems(data?.items)
      })
  }, [])
  return (
    <BgColor color={'grey'}>
      <Padding value={60} />
      <SectionCardsRow
        title={'Последние работы'}
        items={items}
      />
      <Padding value={80} />
    </BgColor>
  )
}

export default React.memo(ContainerLastWorks)
