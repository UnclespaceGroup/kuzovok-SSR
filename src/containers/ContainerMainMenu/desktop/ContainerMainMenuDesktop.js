import React, { useState, useLayoutEffect, useMemo } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './ContainerMainMenuDesktop.module.scss'
import SectionHeaderDesktop from 'components/SectionHeader/desktop/SectionHeaderDesktop'
import SectionOpenMainMenuDesktop from 'components/SectionOpenMainMenu/desktop/SectionOpenMainMenuDesktop'
import Collapse from 'react-collapse'
import { withRouter } from 'react-router'
import { menuItems } from 'constants/MAIN_MENU'
import { useSelector } from 'react-redux'
import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE } from 'constants/serverURLs'
import _ from 'lodash'
import { PAGE_SERVICES } from 'constants/ROUTES'

const ContainerMainMenuDesktop = ({ location }) => {
  const [ open, setOpen ] = useState(false)
  const [ blackHeader, setBlackHeader ] = useState()

  const { phone } = useSelector(state => state.contacts)

  // Подписываемся на скрол
  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      document.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        document.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Убираем скрол, когда меню открыто
  const openMenu = (_open, first) => {
    if (open || first) {
      if (typeof document !== 'undefined') document.getElementsByTagName('body')[0].style.overflow = 'auto'
    } else {
      if (typeof document !== 'undefined') document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }
    setOpen(_open)
  }

  const handleScroll = () => {
    const OFFSET = 100
    if (!window) return
    if (window.pageYOffset > OFFSET) {
      // Сделать черным
      setBlackHeader(true)
    } else if (window.pageYOffset < OFFSET) {
      // сделать белым
      setBlackHeader(false)
    }
  }

  const { data: headerWorks } = useAxiosData({ url: URL_SERVICE, limit: 6 })
  const services = _.map(headerWorks, item => ({
    title: item.title,
    to: PAGE_SERVICES + item.slug
  }))

  useMemo(() => {
    openMenu(false, true)
  }, [location])

  return (
    <div className={css.wrapper}>
      <div className={cn(css.menu)}>
        <SectionHeaderDesktop
          setOpen={openMenu}
          phone={phone}
          black={blackHeader}
          {...{ open, menuItems }} />
      </div>
      <div className={css.container}>
        <Collapse isOpened={open} >
          <SectionOpenMainMenuDesktop
            services={services}
            phone={phone}
            openMenu={openMenu}
          />
        </Collapse>
      </div>
    </div>
  )
}
ContainerMainMenuDesktop.propTypes = {
  location: PropTypes.object
}

export default withRouter(ContainerMainMenuDesktop)
