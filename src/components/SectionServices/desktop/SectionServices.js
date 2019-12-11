import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionServices.module.scss'
import RowCards from 'components/RowCards/desktop/RowCards'
import CardCatalogImage from 'components/CardCatalogImage/desktop/CardCatalogImage'
import Layout from 'components/Layout/Layout'
import Padding from 'components/Padding/Padding'
import ContainerContactsBlock from 'containers/ContainerContactsBlock/desktop/ContainerContactsBlock'
import SectionTitle from 'components/SectionTitle/desktop/SectionTitle'

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
        <RowCards {...cards}>
          <CardCatalogImage />
        </RowCards>
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
