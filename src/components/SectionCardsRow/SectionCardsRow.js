import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionCardsRow.module.scss'
import Layout from '../Layout/Layout'
import CardWorkItem from '../CardWorkItem/CardWorkItem'
import Padding from '../Padding/Padding'
import { PAGE_WORKS } from '../../constants/ROUTES'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionCardsRow = ({ items, title, count, url = PAGE_WORKS }) => (
  <Layout className={css.container}>
    <SectionTitle title={title} count={items.length} />
    <Padding value={40} />
    <div className={css.row}>
      {
        _.map(items, (item, key) => (
          <CardWorkItem key={key} className={css.col} {...item} url={url} />
        ))
      }
    </div>
    <Padding value={120} />
  </Layout>
)
SectionCardsRow.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  count: PropTypes.bool,
  url: PropTypes.string
}

export default React.memo(SectionCardsRow)
