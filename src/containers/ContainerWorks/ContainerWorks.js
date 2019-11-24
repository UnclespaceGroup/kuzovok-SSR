import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../components/Banner/desktop/Banner'
import Padding from '../../components/Padding/Padding'
import useWorks from './useWorks'
import SectionTabs from '../../components/SectionTabs/SectionTabs'
import { withRouter } from 'react-router'
import SectionWorks from '../../components/SectionWorks/SectionWorks'
import { compose } from 'redux'

const ContainerWorks = ({ match }) => {
  const { header, tabs, pending, ...works } = useWorks({ ...match })
  return (
  <>
    <Banner {...header} />
    <SectionTabs items={tabs} pending={pending} />
    <Padding value={80} />
    <SectionWorks {...works} />
    <Padding value={80} />
    <Padding value={120} />
  </>
  )
}
ContainerWorks.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorks)
