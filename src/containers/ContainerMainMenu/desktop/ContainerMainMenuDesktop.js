import React, { useState, useEffect, useMemo } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './ContainerMainMenuDesktop.module.scss'
import SectionHeaderDesktop from '../../../components/SectionHeader/desktop/SectionHeaderDesktop'
import SectionOpenMainMenuDesktop from '../../../components/SectionOpenMainMenu/desktop/SectionOpenMainMenuDesktop'
import Collapse from 'react-collapse'
import { withRouter } from 'react-router'
import { menuItems } from '../data'

const ContainerMainMenuDesktop = ({ location }) => {
  const [ open, setOpen ] = useState(false)
  const [ visibleHeader, setVisibleHeader ] = useState(true)
  // Подписываемся на скрол
  useEffect(() => {
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

  // Предыдущая позиция скрола
  // let prevPosition = 0
  // Если крутили вверх, то показываем хедер
  const handleScroll = () => {
    const OFFSET = 100
    if (!window) return
    if (window.pageYOffset > OFFSET) {
      visibleHeader && setVisibleHeader(false)
    }
    if (window.pageYOffset < OFFSET) {
      !visibleHeader && setVisibleHeader(true)
    }
  }

  useMemo(() => {
    openMenu(false, true)
  }, [location])

  return (
    <div className={css.wrapper}>
      {/* <div className={css.menu__absolute}> */}
      {/*  <SectionHeaderDesktop {...{ setOpen: openMenu, open }} /> */}
      {/* </div> */}
      <div className={cn(css.menu, { [css.visible]: !visibleHeader })}>
        <SectionHeaderDesktop {...{ setOpen: openMenu, open, menuItems }} />
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