import React from 'react'
// import PropTypes from 'prop-types'
import css from './BlockHeaderDesktop.module.scss'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import Layout from '../Layout/Layout'

const items = [
  {
    title: 'Отчеты', href: ''
  },
  {
    title: 'В работе', href: ''
  },
  {
    title: '', href: ''
  }
]

const BlockHeaderDesktop = () => (
  <Layout>
    <div className={css.container}>
      <div className={css.block}>
        <div className={css.burger} />
      </div>
      <div className={css.block}>
        {
          items.map(({ title, href }, key) => (
            <Link to={href} className={css.item} key={key} >{title}</Link>
          ))
        }
        <a href={'tel:89042222222'} className={cn(css.phone, css.item)}>8(904) 555 35 36</a>
      </div>
    </div>
  </Layout>
)
BlockHeaderDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(BlockHeaderDesktop)
