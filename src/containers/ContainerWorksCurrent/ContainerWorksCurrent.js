import React, { useState, useMemo } from 'react'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import im1 from '../../static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import SectionSimplePost from '../../components/SectionSimplePost/SectionSimplePost'
import List from '../../components/List/List'
import { fetchDataList } from '../../axios/fetchData'
import ContainerLastWorks from '../ContainerLastWorks/ContainerLastWorks'
import IconCount from '../../components/IconCount/IconCount'

const header = {
  title: 'Сделано за сегодня',
  text: <div>
    <p>Здесь вы можете просмотреть текущие работы, Узнать статус работы над вашим автомобилем, а также ознакомиться со всеми работами автосервиса</p>
  </div>,
  img: im1,
  sideBlock: <ControllerSideMenu />
}

const ContainerWorksCurrent = () => {
  const [ items, setItems ] = useState([])
  useMemo(() => {
    fetchDataList('/report')
      .then(data => {
        setItems(data.map(item => ({
          ...item,
          galleryData: { photos: item.images && JSON.parse(item.images) }
        })))
      })
  }, [])
  return (
  <>
    <SectionTopBanner
      {...header}
      addIcon={
        <IconCount
          count={items.length}
          texts={['запись', 'записи', 'записей']}
        />
      }
    />
    <List
      items={items}
    >
      <SectionSimplePost withUrl />
    </List>
    <ContainerLastWorks />
  </>
  )
}

export default React.memo(ContainerWorksCurrent)
