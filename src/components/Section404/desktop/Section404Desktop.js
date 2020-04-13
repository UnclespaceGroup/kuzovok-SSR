import React from 'react'
import css from './Section404Desktop.module.scss'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'
import Padding from 'components/Padding/Padding'

const Section404Desktop = () => (
  <div className={css.container}>
    <div className={css.header} >
      <Layout>
        404
      </Layout>
    </div>
    <Layout>
      <h1>Страница не найдена</h1>
      <div className={css.text}>
        Возможно, ссылка, по которой вы перешли, устарела
      </div>
      <Padding value={60} />
      <Button to={'/'}>На главную</Button>
    </Layout>
  </div>
)
export default React.memo(Section404Desktop)
