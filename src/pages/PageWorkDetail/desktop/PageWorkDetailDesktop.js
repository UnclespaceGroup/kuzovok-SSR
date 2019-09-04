import React from 'react'
import s from './PageWorkDetailDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'

const PageWorkDetailDesktop = () => (
  <div className={s.container}>
    service
    <Padding value={80} />
  </div>
)

export default React.memo(PageWorkDetailDesktop)
