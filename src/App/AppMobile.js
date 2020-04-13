import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesMobile from 'pages/RoutesMobile'
import ContainerMainMenuMobile from 'containers/ContainerMainMenu/mobile/ContainerMainMenuMobile'
import ContainerFooterMobile from 'containers/ContainerFooter/mobile/ContainerFooterMobile'
// import ContainerCookie from 'containers/ContainerCookie/ContainerCookie'

const AppMobile = () => (
  <div>
    {/* <ContainerCookie isMobile /> */}
    <ContainerMainMenuMobile />
    <RoutesMobile />
    <ContainerFooterMobile />
  </div>
)

export default compose(
  hot(module),
  React.memo
)(AppMobile)
