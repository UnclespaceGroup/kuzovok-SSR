import { PAGE_PAPER } from 'constants/ROUTES'
import _ from 'lodash'
import moment from 'moment'
import useAxiosData from 'hooks/useAxiosData'
import { URL_PAPER, URL_PAGE } from 'constants/serverURLs'
import { getImagePath } from 'utils/getImagePath'

const usePaper = () => {
  const { data: _bannerData = {} } = useAxiosData({ url: URL_PAGE, single: true, where: { id: 'paper' } })

  const bannerData = {
    title: _bannerData.title,
    text: _bannerData.text,
    img: getImagePath(_bannerData.banner)
  }

  const { data } = useAxiosData({ url: URL_PAPER })

  const items = _.map(data, item => ({
    title: item.title,
    date: moment(item.date).format('LL'),
    actor: `Автор: ${item.actor}`,
    text: item.annotation,
    to: PAGE_PAPER + item.id,
    img: getImagePath(item.banner)
  }))

  const sortedItems = _.sortBy(items, o => moment(o.date).format('YYYYMMDD')).reverse()

  const helmetData = {
    title: 'Список полезных статей по ремонту автомобиля',
    description: 'Различные статьи на автомобильную тематику.'
  }

  return {
    helmetData,
    bannerData,
    items: sortedItems
  }
}
export default usePaper
