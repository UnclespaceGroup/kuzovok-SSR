import React from 'react'
import ContainerHome from '../../../containers/ContainerHome/ContainerHome'
import SectionMainMenuDesktop from '../../../containers/ContainerMainMenu/ContainerMainMenuDesktop'

const PageHomeDesktop = () => (
  <>
    <SectionMainMenuDesktop />
    <ContainerHome />
  </>
)

export default React.memo(PageHomeDesktop)
