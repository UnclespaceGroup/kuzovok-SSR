// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import FooterDesktop from '../components/Footer/FooterDesktop'
import SectionMainMenuDesktop from '../containers/ContainerMainMenu/ContainerMainMenuDesktop'

const AppDesktop = () => (
  <>
    <SectionMainMenuDesktop />
    <RoutesDesktop />
    <FooterDesktop />
  </>
)

export default compose(
  hot(module)
)(AppDesktop)
