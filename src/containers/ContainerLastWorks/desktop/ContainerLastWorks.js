import React from 'react'
import SectionCardsRow from '../../../components/SectionCardsRow/desktop/SectionCardsRow'
import useLastWorks from '../useLastWorks'
import BgColor from '../../../components/BgColor/BgColor'
import Padding from '../../../components/Padding/Padding'

const ContainerLastWorks = () => {
  const { items } = useLastWorks()
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
