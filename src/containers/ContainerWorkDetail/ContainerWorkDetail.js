import React, { useState, useMemo } from 'react'
import Padding from '../../components/Padding/Padding'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { PAGE_WORKS } from '../../constants/ROUTES'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import List from '../../components/List/List'
import Layout from '../../components/Layout/Layout'
import TextBlock from '../../components/TextBlock/TextBlock'
import useWorkDetail from './useWorkDetail'
import IconCount from '../../components/IconCount/IconCount'
import ContainerLastWorks from '../ContainerLastWorks/ContainerLastWorks'
import SectionReviewCard from '../../components/SectionReviewCard/SectionReviewCard'

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
        <TextBlock width={'70%'} text={data?.text} />
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
