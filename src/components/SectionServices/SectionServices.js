import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionServices.module.scss'
import RowCards from '../RowCards/RowCards'
import CardCatalogImage from '../CardCatalogImage/CardCatalogImage'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import CardCatalogSizeble from '../CardCatalogSizeble/CardCatalogSizeble'
import RowSizeble from '../RowSizeble/RowSizeble'
import ContainerContactsBlock from '../../containers/ContainerContactsBlock/ContainerContactsBlock'

const SectionServices = ({ mainCards, cards }) => (
  <div className={css.container}>
    <Layout >
      <Padding value={60} />
      <h1>Услуги компании</h1>
      <Padding value={60} />
      <div className={css.main} >
        <RowCards {...mainCards}>
          <CardCatalogImage />
        </RowCards>
      </div>
      <Padding value={120} />
      <div className={css.cards} >
        <h2>Все услуги</h2>
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
