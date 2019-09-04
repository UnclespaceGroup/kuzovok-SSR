import React from 'react'
import s from './PageServiceDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerService from '../../../containers/ContainerService/ContainerService'

const PageServiceDesktop = () => (
  <div className={s.container}>
    <ContainerService />
    <Padding value={80} />
  </div>
)

export default React.memo(PageServiceDesktop)
