import React from 'react'
import PropTypes from 'prop-types'
import css from './YandexMap.module.scss'
import { Map, YMaps } from 'react-yandex-maps'

const options = {
  suppressMapOpenBlock: true
}

const YandexMap = ({ children }) => (
  <div className={css.container}>
    <YMaps
      query={{
        // apikey: YANDEX_MAP_API_KEY
      }}
    >
      <Map
        height={'100%'}
        options={options}
        state={{
          center: [61.660366, 50.79911089999996],
          zoom: 16
        }}
        width={'100%'}
      />
    </YMaps>
  </div>
)
YandexMap.propTypes = {
  children: PropTypes.node
}

export default React.memo(YandexMap)
