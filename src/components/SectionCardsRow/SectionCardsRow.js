import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionCardsRow.module.scss'
import Layout from '../Layout/Layout'
import CardWorkItem from '../CardWorkItem/CardWorkItem'
import Padding from '../Padding/Padding'
import { PAGE_WORKS } from '../../constants/ROUTES'

const SectionCardsRow = ({ items, title, count, url = PAGE_WORKS }) => (
  <Layout className={css.container}>
    <h2>{title}<span>{count && items.length}</span></h2>
    <Padding value={40} />
    <div className={css.row}>
      {
        _.map(items, (item, key) => (
          <CardWorkItem key={key} className={css.col} {...item} url={url} />
        ))
      }
    </div>
  </Layout>
)
SectionCardsRow.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  count: PropTypes.bool,
  url: PropTypes.string
}

export default React.memo(SectionCardsRow)
