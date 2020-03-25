import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionReviewCardMobile from '../../SectionReviewCard/mobile/SectionReviewCardMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import css from './SectionReviewsMobile.module.scss'
import List from '../../List/List'
import Padding from '../../Padding/Padding'

const SectionReviewsMobile = ({ items = [], title, count, btnMoreClick }) => (
  <div className={css.container}>
    <Padding value={24} />
    <LayoutMobile>
      <SectionTitleMobile title={title} count={count} />
    </LayoutMobile>
    <List
      className={css.list}
      items={items}
    >
      <SectionReviewCardMobile withUrl />
    </List>
    <LayoutMobile>
      {btnMoreClick && <div className={css.btnMore} onClick={btnMoreClick}>Показать ещё</div>}
    </LayoutMobile>
  </div>
)
SectionReviewsMobile.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  count: PropTypes.any,
  btnMoreClick: PropTypes.func
}

export default React.memo(SectionReviewsMobile)
