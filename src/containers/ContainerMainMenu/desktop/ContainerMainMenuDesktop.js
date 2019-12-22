import React, { useState, useLayoutEffect, useMemo } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './ContainerMainMenuDesktop.module.scss'
import SectionHeaderDesktop from 'components/SectionHeader/desktop/SectionHeaderDesktop'
import SectionOpenMainMenuDesktop from 'components/SectionOpenMainMenu/desktop/SectionOpenMainMenuDesktop'
import Collapse from 'react-collapse'
import { withRouter } from 'react-router'
import { menuItems } from 'constants/MAIN_MENU'

const ContainerMainMenuDesktop = ({ location }) => {
  const [ open, setOpen ] = useState(false)
  const [ blackHeader, setBlackHeader ] = useState()

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
    const OFFSET = 300
    if (!window) return
    if (window.pageYOffset > OFFSET) {
      // Сделать черным
      setBlackHeader(true)
    } else if (window.pageYOffset < OFFSET) {
      // сделать белым
      setBlackHeader(false)
    }
  }

  useMemo(() => {
    openMenu(false, true)
  }, [location])

  return (
    <div className={css.wrapper}>
      <div className={cn(css.menu)}>
        <SectionHeaderDesktop
          setOpen={openMenu}
          black={blackHeader}
          {...{ open, menuItems }} />
      </div>
      <div className={css.container}>
        <Collapse isOpened={open} >
          <SectionOpenMainMenuDesktop openMenu={openMenu} />
        </Collapse>
      </div>
    </div>
  )
}
ContainerMainMenuDesktop.propTypes = {
  location: PropTypes.object
}

export default withRouter(ContainerMainMenuDesktop)
