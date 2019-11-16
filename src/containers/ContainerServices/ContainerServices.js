import React, { useMemo, useState } from 'react'
import _ from 'lodash'
import SectionService from '../../components/SectionServices/SectionServices'
import img from 'static/images/allfons.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
// import { PAGE_SERVICES } from '../../constants/ROUTES'
import { mainServices, services } from '../../constants/servicesData'

const ContainerServices = () => {
  const [ mainCards, setMainCards ] = useState({})
  const [ cards, setCards ] = useState({})
  useMemo(() => {
    setMainCards(mainServices)
    setCards(services)
  }, [])

  const filterLists = (search) => {
    setMainCards(filterList(mainServices, search))
    setCards(filterList(services, search))
  }
  const filterList = (list = [], text = '') => {
    return _.filter(list, item => {
      const enableTitle = item?.title && (item?.title?.toLowerCase().indexOf(text?.toLowerCase()) !== -1)
      const enableText = item?.text && (item?.text?.toLowerCase().indexOf(text?.toLowerCase()) !== -1)
      return (enableText || enableTitle)
    })
  }
  return (
    <SectionService
      banner={{
        title: 'Каталог услуг',
        text: 'Воспользуйтесь нашим поиском либо просмотрите весть каталог',
        img: img,
        sideBlock: <ControllerSideMenu />
      }}
      mainCards={{
        items: mainCards
      }}
      cards={{
        items: cards
      }}
      onSearchClick={({ search }) => {
        filterLists(search)
      }}
    />
  )
}

export default React.memo(ContainerServices)
