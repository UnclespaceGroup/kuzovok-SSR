import React from 'react'
import LayoutMobile from 'components/Layout/LayoutMobile'
import Padding from 'components/Padding/Padding'
import SectionContactsMobile from 'components/SectionContacts/mobile/SectionContactsMobile'
import SectionReviewCardMobile from 'components/SectionReviewCard/mobile/SectionReviewCardMobile'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import { PAGE_WORKS } from 'constants/ROUTES'
import ContainerLastWorksMobile from 'containers/ContainerLastWorks/mobile/ContainerLastWorksMobile'
import { compose } from 'redux'
import List from 'components/List/List'
import useWorkDetail from '../useWorkDetail'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import Section404Mobile from 'components/Section404/mobile/Section404Mobile'

const ContainerWorkDetailMobile = () => {
  const { isEmpty, header, items, helmetData, text } = useWorkDetail()
  if (isEmpty) return <Section404Mobile />
  return (
    <>
      <ContainerHelmet {...helmetData} />
      <BannerMobile
        backLink={PAGE_WORKS} {...header} />
      <Padding value={40} />
      <LayoutMobile>
        <WysiwygMobile >{text}</WysiwygMobile>
      </LayoutMobile>
      <List
        items={items}
      >
        <SectionReviewCardMobile />
      </List>
      <Padding value={80} />
      <ContainerLastWorksMobile />
      <Padding value={80} />
      <SectionContactsMobile />
    </>
  )
}

export default compose(
  React.memo
)(ContainerWorkDetailMobile)
