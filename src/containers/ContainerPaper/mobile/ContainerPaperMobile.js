import React from 'react'
import List from 'components/List/List'
import Padding from 'components/Padding/Padding'
import usePaper from 'containers/ContainerPaper/usePaper'
import CardPaperItemMobile from 'components/CardPaperItem/mobile/CardPaperItemMobile'
import LayoutMobile from 'components/Layout/LayoutMobile'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'

const ContainerPaperMobile = () => {
  const { bannerData, items, helmetData } = usePaper()
  return (
  <>
    <ContainerHelmet {...helmetData} />
    <BannerMobile {...bannerData} />
    <LayoutMobile>
      <Padding value={40} />
      <List
        marginBetween={40}
        items={items}
      >
        <CardPaperItemMobile />
      </List>
      <Padding value={120} />
    </LayoutMobile>
  </>
  )
}

export default React.memo(ContainerPaperMobile)
