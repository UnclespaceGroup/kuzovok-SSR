import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3002'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const fetchDataSingle = async (url) => {
  let data = []
  await axios.get(url)
    .then(res => {
      data = res.data[0]
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
