import React from 'react'
import PropTypes from 'prop-types'
import ContainerContactsBlockMobile
  from '../../../containers/ContainerContactsBlock/mobile/ContainerContactsBlockMobile'
import CardCatalogImageMobile from '../../CardCatalogImage/mobile/CardCatalogImageMobile'
import LayoutMobile from '../../Layout/LayoutMobile'
import RowCardsMobile from '../../RowCards/mobile/RowCardsMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import css from './SectionServicesMobile.module.scss'
import Padding from '../../Padding/Padding'

const SectionServicesMobile = ({ mainCards, cards }) => (
  <div className={css.container}>
    <LayoutMobile >
      <Padding value={24} />
      <SectionTitleMobile title={'Основные услуги'} count={mainCards?.length} />
      <div className={css.main} >
        <RowCardsMobile items={mainCards}>
          <CardCatalogImageMobile />
        </RowCardsMobile>
      </div>
      <Padding value={48} />
      {
        !!cards?.length &&
        <div className={css.cards}>
          <SectionTitleMobile title={'Все услуги'} count={cards?.length} />
          <RowCardsMobile items={cards}>
            <CardCatalogImageMobile />
          </RowCardsMobile>
        </div>
      }
      <Padding value={48} />
    </LayoutMobile>
    <div className={css.bottom}>
      <ContainerContactsBlockMobile />
      <Padding value={48} />
    </div>
  </div>
)
SectionServicesMobile.propTypes = {
  cards: PropTypes.array,
  mainCards: PropTypes.array
}

export default React.memo(SectionServicesMobile)
