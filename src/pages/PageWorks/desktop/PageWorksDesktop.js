import React from 'react'
import s from './PageWorksDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'

const PageWorksDesktop = () => (
  <div className={s.container}>
    service
    <Padding value={80} />
  </div>
)

export default React.memo(PageWorksDesktop)
