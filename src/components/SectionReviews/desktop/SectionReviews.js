import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviews.module.scss'
import List from '../../List/List'
// import SectionSimplePost from '../SectionSimplePost/SectionSimplePost'
import Layout from '../../Layout/Layout'
import Padding from '../../Padding/Padding'
import SectionTitle from '../../SectionTitle/desktop/SectionTitle'
import SectionReviewCard from '../../SectionReviewCard/desktop/SectionReviewCard'

const SectionReviews = ({ items = [], title }) => (
  <div className={css.container}>
    <Padding value={60} />
    <Layout>
      <SectionTitle title={title} count={items.length} />
    </Layout>
    <List
      items={items}
    >
      <SectionReviewCard withUrl />
    </List>
  </div>
)
SectionReviews.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node
}

export default React.memo(SectionReviews)
