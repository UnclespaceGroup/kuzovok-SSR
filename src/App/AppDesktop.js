// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import ContainerMainMenuDesktop from 'containers/ContainerMainMenu/desktop/ContainerMainMenuDesktop'
import ContainerFooterDesktop from 'containers/ContainerFooter/desktop/ContainerFooterDesktop'
// import ContainerCookie from 'containers/ContainerCookie/ContainerCookie'

const AppDesktop = () => (
  <div>
    {/* <ContainerCookie /> */}
    <ContainerMainMenuDesktop />
    <RoutesDesktop />
    <ContainerFooterDesktop />
  </div>
)

export default compose(
  hot(module)
)(AppDesktop)
