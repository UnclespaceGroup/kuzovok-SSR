import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviews.module.scss'
import List from '../../List/List'
// import SectionSimplePost from '../SectionSimplePost/SectionSimplePost'
import Layout from '../../Layout/Layout'
import Padding from '../../Padding/Padding'
import SectionTitle from '../../SectionTitle/desktop/SectionTitle'
import SectionReviewCard from '../../SectionReviewCard/desktop/SectionReviewCard'
import SectionAsideWorksDesktop from 'components/SectionAsideWorks/desktop/SectionAsideWorksDesktop'

const SectionReviews = ({ items = [], title, sideMenuItems }) => (
  <div className={css.container}>
    <Padding value={60} />
    <Layout withAside>
      <div>
        <SectionTitle title={title} count={items.length} />
        <List
          items={items}
        >
          <SectionReviewCard withUrl />
        </List>
      </div>
      <div>
        <Padding value={24} />
        <SectionAsideWorksDesktop list={sideMenuItems} />
      </div>
    </Layout>
  </div>
)
SectionReviews.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  sideMenuItems: PropTypes.array
}

export default React.memo(SectionReviews)
