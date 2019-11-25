import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionReviewCardMobile from '../../SectionReviewCard/mobile/SectionReviewCardMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import css from './SectionReviewsMobile.module.scss'
import List from '../../List/List'
// import SectionSimplePost from '../SectionSimplePost/SectionSimplePost'
import Padding from '../../Padding/Padding'

const SectionReviewsMobile = ({ items = [], title }) => (
  <div className={css.container}>
    <Padding value={24} />
    <LayoutMobile>
      <SectionTitleMobile title={title} count={items.length} />
    </LayoutMobile>
    <List
      className={css.list}
      items={items}
    >
      <SectionReviewCardMobile withUrl />
    </List>
  </div>
)
SectionReviewsMobile.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node
}

export default React.memo(SectionReviewsMobile)
