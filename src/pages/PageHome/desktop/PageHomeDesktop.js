import React from 'react'
import ContainerHome from '../../../containers/ContainerHome/ContainerHome'
import SectionMainMenuDesktop from '../../../components/SectionMainMenu/SectionMainMenuDesktop'

const PageHomeDesktop = () => (
  <>
    <SectionMainMenuDesktop />
    <ContainerHome />
  </>
)

export default React.memo(PageHomeDesktop)
