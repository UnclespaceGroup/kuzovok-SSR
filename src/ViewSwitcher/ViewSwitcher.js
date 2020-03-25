// packages
import React, { useMemo } from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import MobileView from './LoadableMobileView'
import DesktopView from './LoadableDesktopView'
import { withViewContext } from 'HOC/ViewContext'
import ScrollToTop from '../HOC/ScrollToTop'
import { URL_CONTACTS } from 'constants/serverURLs'
import { useDispatch } from 'react-redux'
import { axiosInstanse } from 'axiosFetch/fetchData'

const ViewSwitcher = ({ sizes: { isDesktop, isMobile } }) => {
  const dispatch = useDispatch()
  useMemo(() => {
    axiosInstanse.post(URL_CONTACTS, { single: true })
      .then(res => {
        dispatch({
          type: 'addContacts',
          payload: {
            ...res.data,
            phone: res?.data?.mainPhone
          }
        })
      })
  }, [])
  return (
    <ScrollToTop>
      {isMobile ? <MobileView /> : <DesktopView />}
    </ScrollToTop>
  )
}

ViewSwitcher.propTypes = {
  sizes: PropTypes.object
}

export default compose(
  withViewContext,
  hot(module)
)(ViewSwitcher)
