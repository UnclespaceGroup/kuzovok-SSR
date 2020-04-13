import React from 'react'
import css from 'components/Section404/mobile/Section404Mobile.module.scss'
import logo from 'static/logo/colored-logo-inverse.png'
import Button from 'components/Button/Button'
import Padding from 'components/Padding/Padding'
import LayoutMobile from 'components/Layout/LayoutMobile'

const Section404Mobile = () => (
  <div className={css.container}>
    <div className={css.header} >
      <LayoutMobile>
        <img className={css.logo} src={logo} />
      </LayoutMobile>
    </div>
    <LayoutMobile>
      <h1>Страница не найдена</h1>
      <div className={css.text}>
        Возможно, ссылка, по которой вы перешли, устарела
      </div>
      <Padding value={60} />
      <Button to={'/'}>На главную</Button>
    </LayoutMobile>
  </div>
)
export default React.memo(Section404Mobile)
