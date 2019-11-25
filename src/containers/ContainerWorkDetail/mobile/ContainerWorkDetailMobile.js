import React, { useState, useMemo } from 'react'
import LayoutMobile from '../../../components/Layout/LayoutMobile'
import Padding from '../../../components/Padding/Padding'
import SectionContactsMobile from '../../../components/SectionContacts/mobile/SectionContactsMobile'
import SectionReviewCardMobile from '../../../components/SectionReviewCard/mobile/SectionReviewCardMobile'
import SectionTopBannerMobile from '../../../components/SectionTopBanner/mobile/SectionTopBannerMobile'
import WysiwygMobile from '../../../components/Wysiwyg/mobile/WysiwygMobile'
import { PAGE_WORKS } from '../../../constants/ROUTES'
import ContainerLastWorksMobile from '../../ContainerLastWorks/mobile/ContainerLastWorksMobile'
import ControllerSideMenu from '../../ControllerSideMenu/ControllerSideMenu'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import List from '../../../components/List/List'
import useWorkDetail from '../useWorkDetail'
import IconCount from '../../../components/IconCount/IconCount'

const ContainerWorkDetailMobile = ({ match }) => {
  console.log(match)
  const [ pageData, setPageData ] = useState({})
  const id = match?.params?.id
  useMemo(() => {
    if (!id) return
    useWorkDetail({ id })
      .then(data => {
        setPageData(data)
      })
  }, [])
  const {
    header = {},
    items = [],
    data = {}
  } = pageData
  return (
    <>
      <SectionTopBannerMobile
        addIcon={
          <IconCount
            count={items.length}
            texts={['запись', 'записи', 'записей']}
          />
        }
        backLink={PAGE_WORKS} {...header} sideBlock={<ControllerSideMenu />} />
      <Padding value={40} />
      <LayoutMobile>
        <WysiwygMobile >{data?.text}</WysiwygMobile>
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
ContainerWorkDetailMobile.propTypes = {
  match: PropTypes.object
}

export default compose(
  React.memo, withRouter
)(ContainerWorkDetailMobile)
