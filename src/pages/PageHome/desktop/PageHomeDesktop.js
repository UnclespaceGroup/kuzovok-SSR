// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import Layout from 'components/Layout/Layout'

const PageHomeDesktop = () => (
  <Layout className={s.container}>
    desktop
  </Layout>
)

export default React.memo(PageHomeDesktop)
