import React, { useEffect, useState } from 'react'
import SectionCookieDesktop from 'components/SectionCookie/desktop/SectionCookieDesktop'
import { isBrowser } from 'utils'
import SectionCookieMobile from 'components/SectionCookie/mobile/SectionCookieMobile'

const IS_COOKIE_NOTIFICATION_DISABLE = 'IS_COOKIE_NOTIFICATION_DISABLE'

// eslint-disable-next-line react/prop-types
const ContainerCookie = ({ isMobile }) => {
  const [ isCookieNotification, setIsCookieNotification ] = useState(true)

  useEffect(() =>
    isBrowser && setIsCookieNotification(
      !window.localStorage.getItem(IS_COOKIE_NOTIFICATION_DISABLE)
    )
  , [])

  const onClose = () => {
    setIsCookieNotification(false)
    isBrowser && window.localStorage.setItem(IS_COOKIE_NOTIFICATION_DISABLE, 'true')
  }

  const CookieComponent = isMobile ? SectionCookieMobile : SectionCookieDesktop
  return (
    isCookieNotification
      ? <CookieComponent
        onClose={onClose}
        text='Мы используем cookies, чтобы сайт работал лучше. Оставаясь на сайте, вы соглашаетесь с Политикой конфиденциальности.'
      />
      : <div />
  )
}
export default React.memo(ContainerCookie)
