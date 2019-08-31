import React from 'react'
import SectionBannerWithVideoDesktop from '../../components/SectionBannerWithVideo/SectionBannerWithVideoDesktop'

const data = {
  title: <div>Кузов<span>ОК</span></div>,
  text: 'Сервисный центр'
}

const ContainerBannerWithVideoDesktop = () => (
  <SectionBannerWithVideoDesktop
    {...data}
  />
)
ContainerBannerWithVideoDesktop.propTypes = {}

export default React.memo(ContainerBannerWithVideoDesktop)
