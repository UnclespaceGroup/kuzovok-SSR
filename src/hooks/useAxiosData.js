import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { axiosInstanse } from 'axiosFetch/fetchData'

const STATUS_ERROR = 'STATUS_ERROR'
const STATUS_SUCCESS = 'STATUS_SUCCESS'
const STATUS_PENDING = 'STATUS_PENDING'

const useAxiosData = ({
  url,
  where,
  single
}) => {
  const [ status, setStatus ] = useState()
  const [ data, setData ] = useState()
  const location = useLocation()

  useEffect(() => {
    setStatus(STATUS_PENDING)
    axiosInstanse.post(url, { where, single })
      .then(res => {
        setData(res?.data)
        setStatus(STATUS_SUCCESS)
      })
      .catch(err => {
        console.log(`error in ${url} response`, err)
        setStatus(STATUS_ERROR)
      })
  }, [location])

  return {
    data,
    status
  }
}
export default useAxiosData
