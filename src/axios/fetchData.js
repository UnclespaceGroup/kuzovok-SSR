import axios from 'axios'

const localApi = 'http://localhost:3002'
const productionApi = 'http://server.mdf-center.ru'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? productionApi : localApi
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const fetchDataSingle = async (url) => {
  let data = []
  await axios.get(url)
    .then(res => {
      data = res.data
    })
    .catch(e => {
      console.log(e)
    })
  return data
}

export const fetchDataList = async (url) => {
  let data = []
  await axios.get(url)
    .then(res => {
      console.log(res.data)
      data = res.data
    })
    .catch(e => {
      console.log(e)
    })
  console.log(data)
  return data
}

export const fetchDataListParams = async (url, params = {}) => {
  let data = []
  await axios.post(url, params)
    .then(res => {
      console.log(res.data)
      data = res.data
    })
    .catch(e => {
      console.log(e)
    })
  console.log(data)
  return data
}
