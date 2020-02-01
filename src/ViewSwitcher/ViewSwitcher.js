// packages
import React, { useMemo } from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import MobileView from './LoadableMobileView'
import DesktopView from './LoadableDesktopView'
import { withViewContext } from 'HOC/ViewContext'
import ScrollToTop from '../HOC/ScrollToTop'
import useAxiosData from 'hooks/useAxiosData'
import { URL_CONTACTS } from 'constants/serverURLs'
import { useDispatch } from 'react-redux'

const ViewSwitcher = ({ sizes: { isDesktop, isMobile } }) => {
  const dispatch = useDispatch()
  const { data } = useAxiosData({ url: URL_CONTACTS, single: true })
  useMemo(() => {
    dispatch({
      type: 'addContacts',
      payload: {
        ...data,
        phone: data?.mainPhone
      }
    })
  }, [data])
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
