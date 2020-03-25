import axios from 'axios'
import { SERVER_URL } from 'constants/serverURLs'

axios.defaults.baseURL = SERVER_URL + 'api/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const axiosInstanse = axios.create()

export const axiosLocal = axios.create({
  baseURL: ''
})

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
      data = res.data
    })
    .catch(e => {
      console.log(e)
    })
  return data
}

export const fetchDataListParams = async (url, axiosParams = { params: {} }) => {
  let data = []
  await axios.post(url, axiosParams)
    .then(res => {
      data = res.data
    })
    .catch(e => {
      console.log(e)
    })
  return data
}
