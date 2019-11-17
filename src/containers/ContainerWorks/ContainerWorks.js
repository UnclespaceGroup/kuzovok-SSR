import React from 'react'
import Banner from '../../components/Banner/Banner'
import SectionCardsRow from '../../components/SectionCardsRow/SectionCardsRow'
import Padding from '../../components/Padding/Padding'
import { PAGE_WORKS } from '../../constants/ROUTES'
import useWorks from './useWorks'
import SectionTabs from '../../components/SectionTabs/SectionTabs'

const ContainerWorks = () => {
  const { items, lastItems, header, tabs } = useWorks()
  return (
  <>
    <Banner {...header} />
    <SectionTabs items={tabs} />
    <Padding value={80} />
    <SectionCardsRow title={'Последние'} items={lastItems} url={PAGE_WORKS} />
    <Padding value={120} />
    <SectionCardsRow count items={items} title={'Все работы'} url={PAGE_WORKS} />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerWorks)
