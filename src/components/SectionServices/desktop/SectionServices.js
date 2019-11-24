import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionServices.module.scss'
import RowCards from '../../RowCards/desktop/RowCards'
import CardCatalogImage from '../../CardCatalogImage/desktop/CardCatalogImage'
import Layout from '../../Layout/Layout'
import Padding from '../../Padding/Padding'
import CardCatalogSizeble from '../../CardCatalogSizeble/desktop/CardCatalogSizeble'
import RowSizeble from '../../RowSizeble/RowSizeble'
import ContainerContactsBlock from '../../../containers/ContainerContactsBlock/desktop/ContainerContactsBlock'
import SectionTitle from '../../SectionTitle/desktop/SectionTitle'

const SectionServices = ({ mainCards, cards }) => (
  <div className={css.container}>
    <Layout >
      <Padding value={60} />
      <SectionTitle title={'Основные услуги'} count={mainCards?.items?.length} />
      <div className={css.main} >
        <RowCards {...mainCards}>
          <CardCatalogImage />
        </RowCards>
      </div>
      <Padding value={120} />
      <div className={css.cards} >
        <SectionTitle title={'Все услуги'} count={cards?.items?.length} />
        <RowSizeble {...cards}>
          <CardCatalogSizeble />
        </RowSizeble>
      </div>
      <Padding value={120} />
    </Layout>
    <div className={css.bottom}>
      <ContainerContactsBlock />
      <Padding value={120} />
    </div>
  </div>
)
SectionServices.propTypes = {
  banner: PropTypes.object,
  cards: PropTypes.object,
  mainCards: PropTypes.object,
  onChange: PropTypes.func,
  onSearchClick: PropTypes.func
}

export default React.memo(SectionServices)
