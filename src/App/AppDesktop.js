// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import SectionMainMenuDesktop from '../components/SectionMainMenu/SectionMainMenuDesktop'
import FooterDesktop from '../components/Footer/FooterDesktop'

const AppDesktop = () => (
  <>
    <SectionMainMenuDesktop />
    <RoutesDesktop />
    <FooterDesktop />
  </>
)

export default compose(
  hot(module),
  React.memo
)(AppDesktop)
