import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviews.module.scss'
import List from '../List/List'
import SectionSimplePost from '../SectionSimplePost/SectionSimplePost'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionReviews = ({ items = [], title }) => (
  <Layout className={css.container}>
    <Padding value={60} />
    <SectionTitle title={title} count={items.length} />
    <List
      items={items}
    >
      <SectionSimplePost withUrl />
    </List>
  </Layout>
)
SectionReviews.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node
}

export default React.memo(SectionReviews)
