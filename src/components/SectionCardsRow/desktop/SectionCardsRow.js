import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionCardsRow.module.scss'
import Layout from '../../Layout/Layout'
import CardWorkItem from '../../CardWorkItem/desktop/CardWorkItem'
import Padding from '../../Padding/Padding'
import { PAGE_WORKS } from '../../../constants/ROUTES'
import SectionTitle from '../../SectionTitle/desktop/SectionTitle'
import Button from 'components/Button/Button'

const SectionCardsRow = ({ items, title, url = PAGE_WORKS, moreButtonUrl }) => (
  <Layout className={css.container}>
    <SectionTitle title={title} count={items?.length} />
    <div className={css.row}>
      {
        _.map(items, (item, key) => (
          <CardWorkItem key={key} className={css.col} {...item} url={url} />
        ))
      }
    </div>
    <div>
      {moreButtonUrl && (items?.length > 1) && <Button className={css.more} to={moreButtonUrl}>Показать все</Button>}
    </div>
    <Padding value={120} />
  </Layout>
)
SectionCardsRow.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  url: PropTypes.string,
  moreButtonUrl: PropTypes.any
}

export default React.memo(SectionCardsRow)
