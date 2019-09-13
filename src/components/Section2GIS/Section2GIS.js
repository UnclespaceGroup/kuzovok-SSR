import React, { useEffect } from 'react'
import css from './Section2GIS.module.scss'
// import { Map } from '2gis-maps-react'
import DG from '2gis-maps'
import Layout from '../Layout/Layout'
import Button from '../Button/Button'

const Section2GIS = () => {
  useEffect(() => {
    document.getElementById('2gis').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>"
    DG.map('map', {
      'center': [54.98, 82.89],
      'zoom': 13
    })
  })
  return (
    <Layout className={css.container} >
      <Button>Нажать</Button>
      <div id='2gis' style={{ width: '100%', height: '40rem' }} />
    </Layout>
  )
}

export default React.memo(Section2GIS)
