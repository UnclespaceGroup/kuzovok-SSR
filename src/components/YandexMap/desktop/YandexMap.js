import React from 'react'
import PropTypes from 'prop-types'
import css from './YandexMap.module.scss'
import { Map, YMaps, ZoomControl, Placemark, GeolocationControl, RouteButton } from 'react-yandex-maps'

const options = {
  suppressMapOpenBlock: true
}

const MAP_COORD = [61.681086561770314, 50.79997199999999]

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
          center: MAP_COORD,
          zoom: 16,
          behaviors: ["disable('scrollZoom')", 'drag']
        }}
        width={'100%'}
      >
        <Placemark
          geometry={MAP_COORD}
          options={{
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/icons/Location.svg',
            // Размеры метки.
            iconImageSize: [120, 120],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-60, -80]
          }}
        />
        <GeolocationControl options={{ float: 'left' }} />
        <RouteButton options={{ float: 'right' }} />
        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
  </div>
)
YandexMap.propTypes = {
  children: PropTypes.node
}

export default React.memo(YandexMap)
