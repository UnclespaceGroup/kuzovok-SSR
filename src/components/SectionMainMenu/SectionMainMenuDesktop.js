import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './SectionMainMenuDesktop.module.scss'
import SectionHeaderDesktop from '../SectionHeader/SectionHeaderDesktop'
import SectionOpenMainMenuDesktop from '../SectionOpenMainMenu/SectionOpenMainMenuDesktop'
import Collapse from 'react-collapse'
import { withRouter } from 'react-router'

const SectionMainMenuDesktop = ({ location }) => {
  // Перестраховываемся, если меню перерендериться, возвращаем исходные данные
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
      if (document) document.getElementsByTagName('body')[0].style.overflow = 'auto'
    } else {
      if (document) document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }
    setOpen(_open)
  }

  // Предыдущая позиция скрола
  let prevPosition = 0
  // Если крутили вверх, то показываем хедер
  const handleScroll = e => {
    if (!window) return
    if (window.pageYOffset > prevPosition) setVisibleHeader(false)
    else setVisibleHeader(true)
    prevPosition = window.pageYOffset
  }

  const [ open, setOpen ] = useState(false)
  const [ visibleHeader, setVisibleHeader ] = useState(false)

  return (
    <div className={cn(css.wrapper)}>
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
SectionMainMenuDesktop.propTypes = {
  location: PropTypes.object
}

export default withRouter(SectionMainMenuDesktop)
