// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import FooterDesktop from '../components/Footer/desktop/FooterDesktop'
import ContainerMainMenuDesktop from '../containers/ContainerMainMenu/desktop/ContainerMainMenuDesktop'

const AppDesktop = () => (
  <>
    <ContainerMainMenuDesktop />
    <RoutesDesktop />
    <FooterDesktop />
  </>
)

export default compose(
  hot(module)
)(AppDesktop)
