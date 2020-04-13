import React from 'react'
import List from 'components/List/List'
import CardPaperItem from 'components/CardPaperItem/desktop/CardPaperItem'
import Layout from 'components/Layout/Layout'
import Padding from 'components/Padding/Padding'
import usePaper from 'containers/ContainerPaper/usePaper'
import Banner from 'components/Banner/desktop/Banner'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import SectionTabs from 'components/SectionTabs/desktop/SectionTabs'

const ContainerPaper = () => {
  const { bannerData, helmetData, items } = usePaper()
  return (
  <>
    <ContainerHelmet {...helmetData} />
    <Banner {...bannerData} />
    <SectionTabs />
    <Layout >
      <Padding value={120} />
      <List
        marginBetween={80}
        items={items}
      >
        <CardPaperItem />
      </List>
      <Padding value={120} />
    </Layout>
  </>
  )
}

export default React.memo(ContainerPaper)
