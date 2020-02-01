import React, { useState, useEffect, useMemo } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './ContainerMainMenuMobile.module.scss'
import SectionHeaderMobile from 'components/SectionHeader/mobile/SectionHeaderMobile'
import Collapse from 'react-collapse'
import { withRouter } from 'react-router'
import { menuItems } from 'constants/MAIN_MENU'
import SectionOpenMainMenuMobile from 'components/SectionOpenMainMenu/mobile/SectionOpenMainMenuMobile'
import { useSelector } from 'react-redux'

const ContainerMainMenuMobile = ({ location }) => {
  const [ open, setOpen ] = useState(false)
  const [ blackHeader, setBlackHeader ] = useState()

  const { phone } = useSelector(state => state.contacts)

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

  useMemo(() => {
    openMenu(false, true)
  }, [location])

  return (
    <div className={css.wrapper}>
      <div className={cn(css.menu)}>
        <SectionHeaderMobile phone={phone} {...{ setOpen: openMenu, open, menuItems, black: blackHeader }} />
      </div>
      <div className={css.container}>
        <Collapse isOpened={open} >
          <SectionOpenMainMenuMobile phone={phone} openMenu={openMenu} />
        </Collapse>
      </div>
    </div>
  )
}
ContainerMainMenuMobile.propTypes = {
  location: PropTypes.object
}

export default withRouter(ContainerMainMenuMobile)
