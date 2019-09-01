import React from 'react'
import SectionBannerWithVideoDesktop from '../../components/SectionBannerWithVideo/SectionBannerWithVideoDesktop'
import Button from '../../components/Button/Button'

const data = {
  title: <div>Кузов<span>ОК</span></div>,
  text: 'Сервисный центр',
  button: <Button>Записаться</Button>
}

const ContainerBannerWithVideoDesktop = () => (
  <SectionBannerWithVideoDesktop
    {...data}
  />
)
ContainerBannerWithVideoDesktop.propTypes = {}

export default React.memo(ContainerBannerWithVideoDesktop)
