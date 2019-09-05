import React from 'react'
import s from './PageWorkDetailDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'
import ContainerWorkDetail from '../../../containers/ContainerWorkDetail/ContainerWorkDetail'

const PageWorkDetailDesktop = () => (
  <div className={s.container}>
    <ContainerWorkDetail />
    <Padding value={80} />
  </div>
)

export default React.memo(PageWorkDetailDesktop)
