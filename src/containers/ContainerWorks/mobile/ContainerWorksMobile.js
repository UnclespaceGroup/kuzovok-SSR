import React from 'react'
import PropTypes from 'prop-types'
import BannerMobile from 'components/Banner/mobile/BannerMobile'
import Padding from 'components/Padding/Padding'
import useWorks from '../useWorks'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import SectionCardsRowMobile from 'components/SectionCardsRow/mobile/SectionCardsRowMobile'

const ContainerWorksMobile = ({ match }) => {
  const { header, items } = useWorks({ ...match })
  return (
  <>
    <BannerMobile withoutTabs {...header} />
    <Padding value={24} />
          <SectionCardsRowMobile
            items={items}
            title={'Работы станции'}
          />
    <Padding value={40} />
  </>
  )
}
ContainerWorksMobile.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorksMobile)
