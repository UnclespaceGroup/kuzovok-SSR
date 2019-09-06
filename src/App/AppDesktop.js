// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import FooterDesktop from '../components/Footer/FooterDesktop'

const AppDesktop = () => (
  <>
    <RoutesDesktop />
    <FooterDesktop />
  </>
)

export default compose(
  hot(module)
)(AppDesktop)
