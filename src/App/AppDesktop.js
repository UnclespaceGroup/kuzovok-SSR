// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import SectionHeaderDesktop from '../components/SectionHeader/SectionHeaderDesktop'

const AppDesktop = () => (
  <>
    <SectionHeaderDesktop />
    <RoutesDesktop />
  </>
)

export default compose(
  hot(module),
  React.memo
)(AppDesktop)
