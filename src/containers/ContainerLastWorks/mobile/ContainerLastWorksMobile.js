import React from 'react'
import useLastWorks from '../useLastWorks'
import BgColor from 'components/BgColor/BgColor'
import Padding from 'components/Padding/Padding'
import SectionCardsRowMobile from 'components/SectionCardsRow/mobile/SectionCardsRowMobile'

const ContainerLastWorksMobile = () => {
  const { items } = useLastWorks()
  return (
    <BgColor color={'grey'}>
      <Padding value={20} />
      <SectionCardsRowMobile
        inLine
        title={'Последние работы'}
        items={items}
      />
      <Padding value={80} />
    </BgColor>
  )
}

export default React.memo(ContainerLastWorksMobile)
