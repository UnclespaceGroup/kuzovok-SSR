import React, { useMemo, useState } from 'react'
import { fetchDataListParams } from 'axios/fetchData'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { getStatusByCode } from 'utils/getNameByValue'

const ContainerWorksSpecificLimited = ({ params, children, title }) => {
  const [ pending, setPending ] = useState(false)
  const [ items, setItems ] = useState([])

  useMemo(() => {
    fetchDataListParams(`/work/`, {
      params: {
        limit: 3,
        ...params
      }
    })
      .then(data => {
        const items = _.map(data, item => ({
          ...item,
          text: item.annotation,
          img: item.banner,
          subtitle: getStatusByCode(item.status),
          date: item.createdAt
        }))
        setPending(false)
        setItems(items)
      })
      .catch(e => {
        setPending(false)
      })
  }, [params])

  return (
    items?.length ? React.cloneElement(children, { items, pending, title }) : <div />
  )
}
ContainerWorksSpecificLimited.propTypes = {
  params: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.node
}
export default React.memo(ContainerWorksSpecificLimited)
