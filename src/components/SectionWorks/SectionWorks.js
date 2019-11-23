import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionWorks.module.scss'
import SectionCardsRow from '../SectionCardsRow/SectionCardsRow'
import { PAGE_WORK_DETAIL } from '../../constants/ROUTES'

const SectionWorks = ({ lastItems, items }) => (
  <div className={css.container}>
    { lastItems.length > 0 && <SectionCardsRow title={'Последние'} items={lastItems} url={PAGE_WORK_DETAIL} />}
    <SectionCardsRow count items={items} title={'Работы'} url={PAGE_WORK_DETAIL} />
  </div>
)
SectionWorks.propTypes = {
  lastItems: PropTypes.array,
  items: PropTypes.array
}
export default SectionWorks
