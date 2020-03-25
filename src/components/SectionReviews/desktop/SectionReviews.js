import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionReviews.module.scss'
import List from '../../List/List'
import Layout from '../../Layout/Layout'
import Padding from '../../Padding/Padding'
import SectionTitle from '../../SectionTitle/desktop/SectionTitle'
import SectionReviewCard from '../../SectionReviewCard/desktop/SectionReviewCard'
import SectionAsideWorksDesktop from 'components/SectionAsideWorks/desktop/SectionAsideWorksDesktop'

const SectionReviews = ({ items = [], title, sideMenuItems, btnMoreClick, count }) => (
  <div className={css.container}>
    <Padding value={60} />
    <Layout withAside>
      <div>
        <SectionTitle title={title} count={count} />
        <List
          items={items}
        >
          <SectionReviewCard withUrl />
        </List>
        {btnMoreClick && <div className={css.btnMore} onClick={btnMoreClick}>Показать ещё</div>}
      </div>
      <div>
        <Padding value={24} />
        <SectionAsideWorksDesktop list={sideMenuItems} />
        <Padding value={24} />
      </div>
    </Layout>
  </div>
)
SectionReviews.propTypes = {
  items: PropTypes.array,
  btnMoreClick: PropTypes.func,
  title: PropTypes.node,
  sideMenuItems: PropTypes.array,
  count: PropTypes.any
}

export default React.memo(SectionReviews)
