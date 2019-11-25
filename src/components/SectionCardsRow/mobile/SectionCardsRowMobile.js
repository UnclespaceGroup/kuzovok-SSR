import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionCardsRowMobile.module.scss'
import Padding from '../../Padding/Padding'
import { PAGE_WORKS } from '../../../constants/ROUTES'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import LayoutMobile from '../../Layout/LayoutMobile'
import CardWorkItemMobile from '../../CardWorkItem/mobile/CardWorkItemMobile'

const SectionCardsRowMobile = ({ items, title, inLine, url = PAGE_WORKS }) => (
  <LayoutMobile className={css.container}>
    <SectionTitleMobile title={title} count={items.length} />
    <div className={inLine ? css.row : css.column} >
      {
        _.map(items, (item, key) => (
          <div key={key} >
            <CardWorkItemMobile className={inLine ? css.col : css.item} {...item} url={url} />
          </div>
        ))
      }
    </div>
    <Padding value={20} />
  </LayoutMobile>
)
SectionCardsRowMobile.propTypes = {
  items: PropTypes.array,
  title: PropTypes.node,
  inLine: PropTypes.bool,
  url: PropTypes.string
}

export default React.memo(SectionCardsRowMobile)
