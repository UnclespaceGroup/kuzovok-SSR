import React, { useState, useEffect, useMemo } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './ContainerMainMenuDesktop.module.scss'
import SectionHeaderDesktop from '../../components/SectionHeader/SectionHeaderDesktop'
import SectionOpenMainMenuDesktop from '../../components/SectionOpenMainMenu/SectionOpenMainMenuDesktop'
import Collapse from 'react-collapse'
import { withRouter } from 'react-router'

const ContainerMainMenuDesktop = ({ location }) => {
  const [ open, setOpen ] = useState(false)
  const [ visibleHeader, setVisibleHeader ] = useState(false)
  // Подписываемся на скрол
  useEffect(() => {
    if (document) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      document.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (document) document.getElementsByTagName('body')[0].style.overflow = 'auto'
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Убираем скрол, когда меню открыто
  const openMenu = (_open) => {
    if (open) {
      if (typeof document !== 'undefined') document.getElementsByTagName('body')[0].style.overflow = 'auto'
    } else {
      if (typeof document !== 'undefined') document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }
    setOpen(_open)
  }

  // Предыдущая позиция скрола
  let prevPosition = 0
  // Если крутили вверх, то показываем хедер
  const handleScroll = () => {
    if (!window) return
    if (window.pageYOffset > prevPosition) setVisibleHeader(false)
    else setVisibleHeader(true)
    prevPosition = window.pageYOffset
  }

  // Перестраховываемся, если меню перерендериться, возвращаем исходные данные
  useMemo(() => {
    openMenu(false)
    setVisibleHeader(false)
  }, [location])

  return (
    <div className={css.wrapper}>
      <div className={css.menu__absolute}>
        <SectionHeaderDesktop {...{ setOpen: openMenu, open }} />
      </div>
      <div className={cn(css.menu__static, { [css.invisible]: !visibleHeader })}>
        <SectionHeaderDesktop {...{ setOpen: openMenu, open }} />
      </div>
      <div className={css.container}>
        <Collapse isOpened={open} >
          <SectionOpenMainMenuDesktop />
        </Collapse>
      </div>
    </div>
  )
}
ContainerMainMenuDesktop.propTypes = {
  location: PropTypes.object
}

export default withRouter(ContainerMainMenuDesktop)
