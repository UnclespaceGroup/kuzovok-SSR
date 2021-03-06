import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionCardsRowMobile.module.scss'
import Padding from '../../Padding/Padding'
import { PAGE_WORK_DETAIL } from 'constants/ROUTES'
import SectionTitleMobile from 'components/SectionTitle/mobile/SectionTitleMobile'
import LayoutMobile from 'components/Layout/LayoutMobile'
import CardWorkItemMobile from 'components/CardWorkItem/mobile/CardWorkItemMobile'
import Button from 'components/Button/Button'

const SectionCardsRowMobile = ({ items, title, inLine, url = PAGE_WORK_DETAIL, moreButtonUrl }) => (
  <LayoutMobile className={css.container}>
    {title && <SectionTitleMobile title={title} count={items?.length} />}
    <div className={inLine ? css.row : css.column} >
      {
        _.map(items, (item, key) => (
          <div key={key} >
            <CardWorkItemMobile className={inLine ? css.col : css.item} {...item} url={url} />
          </div>
        ))
      }
    </div>
    <div>
      {moreButtonUrl && (items?.length > 1) && <Button className={css.more} to={moreButtonUrl}>Показать все</Button>}
    </div>
    <Padding value={20} />
  </LayoutMobile>
)
SectionCardsRowMobile.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  inLine: PropTypes.bool,
  url: PropTypes.string,
  moreButtonUrl: PropTypes.any
}

export default React.memo(SectionCardsRowMobile)
