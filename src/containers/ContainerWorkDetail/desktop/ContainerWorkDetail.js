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

const ContainerWorkDetail = () => {
  const { header, items, text } = useWorkDetail()
  return (
    <>
      <Banner
        backLink={PAGE_WORKS} {...header}
      />
      <Padding value={40} />
      <Layout>
        <Wysiwyg width={'70%'} >{text}</Wysiwyg>
      </Layout>
      <Padding value={40} />
      <Layout withAside>
        <div>
          <List
            items={items}
          >
            <SectionReviewCard />
          </List>
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
