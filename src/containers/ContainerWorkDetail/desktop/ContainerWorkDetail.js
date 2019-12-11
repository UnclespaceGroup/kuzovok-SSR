import React, { useState, useMemo } from 'react'
import Padding from '../../../components/Padding/Padding'
import SectionContacts from '../../../components/SectionContacts/desktop/SectionContacts'
import Wysiwyg from '../../../components/Wysiwyg/desktop/Wysiwyg'
import { PAGE_WORKS } from '../../../constants/ROUTES'
import SectionTopBanner from '../../../components/SectionTopBanner/desktop/SectionTopBanner'
import ControllerSideMenu from '../../ControllerSideMenu/ControllerSideMenu'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import List from '../../../components/List/List'
import Layout from '../../../components/Layout/Layout'
import useWorkDetail from '../useWorkDetail'
import IconCount from '../../../components/IconCount/IconCount'
import ContainerLastWorks from '../../ContainerLastWorks/desktop/ContainerLastWorks'
import SectionReviewCard from '../../../components/SectionReviewCard/desktop/SectionReviewCard'

const ContainerWorkDetail = ({ match }) => {
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
      <SectionTopBanner
        addIcon={
          <IconCount
            count={items.length}
            texts={['запись', 'записи', 'записей']}
          />
        }
        backLink={PAGE_WORKS} {...header} sideBlock={<ControllerSideMenu />} />
      <Padding value={40} />
      <Layout>
        <Wysiwyg width={'70%'} >{data?.text}</Wysiwyg>
      </Layout>
      <List
        items={items}
      >
        <SectionReviewCard />
      </List>
      <Padding value={80} />
      <ContainerLastWorks />
      <Padding value={80} />
      <SectionContacts />
    </>
  )
}
ContainerWorkDetail.propTypes = {
  match: PropTypes.object
}

export default compose(
  React.memo, withRouter
)(ContainerWorkDetail)