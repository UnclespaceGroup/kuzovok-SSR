import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviews.module.scss'
import List from '../List/List'
import SectionSimplePost from '../SectionSimplePost/SectionSimplePost'
import IconCount from '../IconCount/IconCount'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'

const SectionReviews = ({ items }) => (
  <Layout className={css.container}>
    <Padding value={60} />
    <IconCount className={css.count} count={items.length}
      texts={[
        'Запись', 'Записи', 'Записей'
      ]}
    />
    <List
      items={items}
    >
      <SectionSimplePost withUrl />
    </List>
  </Layout>
)
SectionReviews.propTypes = {
  items: PropTypes.array
}

export default React.memo(SectionReviews)
