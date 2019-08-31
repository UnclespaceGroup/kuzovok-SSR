// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import ContainerBannerWithVideoDesktop
  from '../../../containers/ContainerBannerWithVideo/ContainerBannerWithVideoDesktop'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <ContainerBannerWithVideoDesktop />
  </div>
)

export default React.memo(PageHomeDesktop)
