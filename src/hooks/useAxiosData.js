import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { axiosInstanse } from 'axiosFetch/fetchData'

const STATUS_ERROR = 'STATUS_ERROR'
const STATUS_SUCCESS = 'STATUS_SUCCESS'
const STATUS_PENDING = 'STATUS_PENDING'
const STATUS_EMPTY = 'STATUS_EMPTY'

const useAxiosData = ({
  url,
  where,
  single,
  limit,
  offset,
  between,
  isNotReady
}, deps) => {
  const [ status, setStatus ] = useState()
  const [ data, setData ] = useState({})
  const location = useLocation()

  useEffect(() => {
    setStatus(STATUS_PENDING)
    axiosInstanse.post(url, { where, single, limit, between, offset })
      .then(res => {
        console.log(res?.data)
        setData(res?.data)
        setStatus(res?.data ? STATUS_SUCCESS : STATUS_EMPTY)
      })
      .catch(err => {
        console.log(`error in ${url} response`, err)
        setStatus(STATUS_ERROR)
      })
  }, [location].concat(deps))

  return {
    data,
    status,
    isPending: status === STATUS_PENDING,
    isError: status === STATUS_ERROR,
    isSuccess: status === STATUS_SUCCESS,
    isEmpty: status === STATUS_EMPTY
  }
}
export default useAxiosData
