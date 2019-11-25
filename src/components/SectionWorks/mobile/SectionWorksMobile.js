import React from 'react'
import PropTypes from 'prop-types'
import SectionCardsRowMobile from '../../SectionCardsRow/mobile/SectionCardsRowMobile'
import css from './SectionWorksMobile.module.scss'
import { PAGE_WORK_DETAIL } from '../../../constants/ROUTES'

const SectionWorksMobile = ({ lastItems, items }) => (
  <div className={css.container}>
    { lastItems.length > 0 && <SectionCardsRowMobile title={'Последние'} items={lastItems} url={PAGE_WORK_DETAIL} />}
    <SectionCardsRowMobile count items={items} title={'Работы'} url={PAGE_WORK_DETAIL} />
  </div>
)
SectionWorksMobile.propTypes = {
  lastItems: PropTypes.array,
  items: PropTypes.array
}
export default SectionWorksMobile
