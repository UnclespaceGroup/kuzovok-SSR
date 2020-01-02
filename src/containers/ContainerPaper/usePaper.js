import img from 'static/images/allfons.jpg'
import { PAGE_PAPER } from 'constants/ROUTES'
import _ from 'lodash'
import { fetchDataList } from 'axiosFetch/fetchData'
import { useState } from 'react'
import moment from 'moment'

const usePaper = () => {
  const [ data, setData ] = useState()
  const bannerData = {
    title: 'Полезные статьи',
    text: '',
    img: img
  }

  fetchDataList('paper')
    .then(data => {
      setData(data)
    })

  const items = _.map(data, item => ({
    title: item.title,
    date: moment(item.date).format('FF'),
    actor: `Автор: ${item.actor}`,
    text: item.annotation,
    to: PAGE_PAPER + item.id,
    img: item.banner
  }))

  return {
    bannerData,
    items
  }
}
export default usePaper
