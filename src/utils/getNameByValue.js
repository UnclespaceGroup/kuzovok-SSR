import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

const STATUSES = ['Готово', 'В работе', 'Архив']

export const getStatusByCode = (code) => {
  return STATUSES[code]
}

export const getDate = (date) => {
  return moment(date).format('LL')
}
