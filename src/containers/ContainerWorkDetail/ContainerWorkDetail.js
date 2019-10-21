import React, { useState, useMemo } from 'react'
import Padding from '../../components/Padding/Padding'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { PAGE_WORKS } from '../../constants/ROUTES'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import { fetchDataList, fetchDataSingle } from '../../axios/fetchData'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import SectionSimplePost from '../../components/SectionSimplePost/SectionSimplePost'
import List from '../../components/List/List'

const ContainerWorkDetail = ({ match }) => {
  const [ header, setHeader ] = useState()
  const [ items, setItems ] = useState()
  const id = match?.params?.id
  useMemo(() => {
    if (!id) return
    fetchDataSingle(`/work/${id}`)
      .then(data => {
        console.log(data)
        setHeader({
          ...data,
          text: data.annotation,
          img: data.banner
        })
      })
    fetchDataList(`/report?parentId=${id}`)
      .then(data => {
        setItems(data.map(item => ({
          ...item,
          galleryData: { photos: item.images && JSON.parse(item.images) }
        })))
      })
  }, [])

  return (
    <>
      <SectionTopBanner backLink={PAGE_WORKS} {...header} sideBlock={<ControllerSideMenu />} />
      <Padding value={150} />
      <List
        items={items}
      >
        <SectionSimplePost />
      </List>
      <Padding value={150} />
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
