import React from 'react'
import s from './PageAboutDesktop.module.scss'
import Padding from '../../../components/Padding/Padding'

const PageAboutDesktop = () => (
  <div className={s.container}>
    service
    <Padding value={80} />
  </div>
)

export default React.memo(PageAboutDesktop)
