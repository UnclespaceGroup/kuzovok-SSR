import React, { useState, useMemo } from 'react'
import Padding from '../../components/Padding/Padding'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { PAGE_WORKS } from '../../constants/ROUTES'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
// import im1 from '../../static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import SectionTabs from '../../components/SectionTabs/SectionTabs'
import { fetchDataSingle } from '../../axios/fetchData'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

// const _header = {
//   title: 'Лада Приора',
//   status: 'В работе',
//   img: im1,
//   text: <ul>
//     <li>Полная покраска автомобиля</li>
//     <li>Замена заднего бампера</li>
//   </ul>,
//   sideBlock: <ControllerSideMenu />
// }

const ContainerWorkDetail = ({ match }) => {
  const [ header, setHeader ] = useState()
  const id = match?.params?.id
  useMemo(() => {
    if (!id) return
    fetchDataSingle(`/work/${id}`)
      .then(data => {
        console.log(data)
        setHeader({
          title: data.FIELD_TITLE,
          status: data.FIELD_STATUS,
          text: data.FIELD_TEXT,
          img: data.FIELD_BANNER
        })
      })
  }, [])
  console.log(header)

  return (
    <>
      <SectionTopBanner backLink={PAGE_WORKS} {...header} sideBlock={<ControllerSideMenu />} />
      <SectionTabs
        items={[
          {
            title: 'Общая информация',
            to: PAGE_WORKS + 1
          },
          {
            title: 'Отчет по дням',
            to: PAGE_WORKS + 1 + '/days'
          }
        ]}
      />

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
