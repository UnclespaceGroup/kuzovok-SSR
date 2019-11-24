import React from 'react'
import PropTypes from 'prop-types'
import ContainerContactsBlockMobile
  from '../../../containers/ContainerContactsBlock/mobile/ContainerContactsBlockMobile'
import CardCatalogImageMobile from '../../CardCatalogImage/mobile/CardCatalogImageMobile'
import CardCatalogSizebleMobile from '../../CardCatalogSizeble/mobile/CardCatalogSizebleMobile'
import LayoutMobile from '../../Layout/LayoutMobile'
import RowCardsMobile from '../../RowCards/mobile/RowCardsMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import css from './SectionServicesMobile.module.scss'
import Padding from '../../Padding/Padding'

const SectionServicesMobile = ({ mainCards, cards }) => (
  <div className={css.container}>
    <LayoutMobile >
      <Padding value={24} />
      <SectionTitleMobile title={'Основные услуги'} count={mainCards?.items?.length} />
      <div className={css.main} >
        <RowCardsMobile {...mainCards}>
          <CardCatalogImageMobile />
        </RowCardsMobile>
      </div>
      <Padding value={48} />
      <div className={css.cards} >
        <SectionTitleMobile title={'Все услуги'} count={cards?.items?.length} />
        <RowCardsMobile {...cards}>
          <CardCatalogSizebleMobile />
        </RowCardsMobile>
      </div>
      <Padding value={48} />
    </LayoutMobile>
    <div className={css.bottom}>
      <ContainerContactsBlockMobile />
      <Padding value={48} />
    </div>
  </div>
)
SectionServicesMobile.propTypes = {
  banner: PropTypes.object,
  cards: PropTypes.object,
  mainCards: PropTypes.object,
  onChange: PropTypes.func,
  onSearchClick: PropTypes.func
}

export default React.memo(SectionServicesMobile)
