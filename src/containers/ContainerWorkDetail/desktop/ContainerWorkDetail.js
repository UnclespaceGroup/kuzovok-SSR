import React from 'react'
import Padding from 'components/Padding/Padding'
import SectionContacts from 'components/SectionContacts/desktop/SectionContacts'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import { PAGE_WORKS } from 'constants/ROUTES'
import { compose } from 'redux'
import List from 'components/List/List'
import Layout from 'components/Layout/Layout'
import useWorkDetail from '../useWorkDetail'
import ContainerLastWorks from 'containers/ContainerLastWorks/desktop/ContainerLastWorks'
import SectionReviewCard from 'components/SectionReviewCard/desktop/SectionReviewCard'
import Banner from 'components/Banner/desktop/Banner'
import SectionAsideWorksDesktop from 'components/SectionAsideWorks/desktop/SectionAsideWorksDesktop'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import Section404Desktop from 'components/Section404/desktop/Section404Desktop'

const ContainerWorkDetail = () => {
  const { isEmpty, helmetData, header, items, text, sideMenuItems } = useWorkDetail()
  if (isEmpty) return <Section404Desktop />
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <Banner
        backLink={PAGE_WORKS} {...header}
      />
      <Padding value={40} />
      <Layout withAside>
        <div>
          <Padding value={40} />
          <Wysiwyg >{text}</Wysiwyg>
          <Padding value={40} />
          <List
            items={items}
          >
            <SectionReviewCard />
          </List>
        </div>
        <div>
          <Padding value={24} />
          <SectionAsideWorksDesktop list={sideMenuItems} />
        </div>
      </Layout>
      <Padding value={80} />
      <ContainerLastWorks />
      <Padding value={80} />
      <SectionContacts />
    </>
  )
}
export default compose(
  React.memo
)(ContainerWorkDetail)
