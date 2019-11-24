import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesMobile from 'pages/RoutesMobile'
import ContainerMainMenuMobile from '../containers/ContainerMainMenu/mobile/ContainerMainMenuMobile'
import FooterMobile from '../components/Footer/mobile/FooterMobile'

const AppMobile = () => (
  <>
    <ContainerMainMenuMobile />
    <RoutesMobile />
    <FooterMobile />
  </>
)

export default compose(
  hot(module),
  React.memo
)(AppMobile)
