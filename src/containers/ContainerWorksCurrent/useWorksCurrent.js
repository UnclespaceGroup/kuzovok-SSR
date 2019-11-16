import React, { useMemo, useState } from 'react'
import { fetchDataList } from '../../axios/fetchData'
import im1 from '../../static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import moment from 'moment'
import { MdDateRange } from 'react-icons/md'

const useWorksCurrent = () => {
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

  const headerData = {
    title: 'Сделано за сегодня',
    text: <div>
      <p>Здесь вы можете просмотреть текущие работы, Узнать статус работы над вашим автомобилем, а также ознакомиться со всеми работами автосервиса</p>
    </div>,
    img: im1,
    sideBlock: <ControllerSideMenu />,
    icons: [
      {
        icon: <MdDateRange />,
        children: moment().format('LL')
      }
    ]
  }

  return {
    items,
    headerData
  }
}

export default useWorksCurrent
