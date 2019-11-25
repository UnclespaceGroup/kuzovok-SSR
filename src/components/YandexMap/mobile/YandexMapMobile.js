import React from 'react'
import PropTypes from 'prop-types'
import css from './YandexMapMobile.module.scss'
import { Map, YMaps, ZoomControl, Placemark, GeolocationControl, RouteButton } from 'react-yandex-maps'

const options = {
  suppressMapOpenBlock: true
}

const MAP_COORD = [61.681086561770314, 50.79997199999999]

const YandexMapMobile = ({ children }) => (
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
          center: MAP_COORD,
          zoom: 16,
          behaviors: ["disable('scrollZoom')", 'drag']
        }}
        width={'100%'}
      >
        <Placemark
          geometry={MAP_COORD}
          options={{
            preset: 'islands#blueHomeCircleIcon'
          }}
        />
        <GeolocationControl options={{ float: 'left' }} />
        <RouteButton options={{ float: 'right' }} />
        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
  </div>
)
YandexMapMobile.propTypes = {
  children: PropTypes.node
}

export default React.memo(YandexMapMobile)
