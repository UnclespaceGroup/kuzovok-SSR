import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionService.module.scss'
import SectionTopBanner from '../SectionTopBanner/SectionTopBanner'
import FieldInput from '../FieldInput/FieldInput'
import Button from '../Button/Button'
import RowCards from '../RowCards/RowCards'
import CardCatalogImage from '../CardCatalogImage/CardCatalogImage'
import Layout from '../Layout/Layout'
import CardCatalogIcon from '../CardCatalogIcon/CardCatalogIcon'
import Padding from '../Padding/Padding'
import SectionContacts from '../SectionContacts/SectionContacts'

const SectionService = ({ banner, mainCards, cards }) => (
  <div className={css.container}>
    <SectionTopBanner {...banner} >
      <form className={css.form}>
        <FieldInput
          placeholder={'Поиск услуги'}
        />
        <Button>Искать</Button>
      </form>
    </SectionTopBanner>
    <Layout>
      <Padding value={120} />
      <div className={css.main} >
        <RowCards {...mainCards}>
          <CardCatalogImage />
        </RowCards>
      </div>
      <Padding value={120} />
      <div className={css.cards} >
        <h2>Все услуги</h2>
        <RowCards {...cards}>
          <CardCatalogIcon />
        </RowCards>
      </div>
      <Padding value={120} />
    </Layout>
    <div className={css.bottom}>
      <SectionContacts />
      <Padding value={120} />
    </div>
  </div>
)
SectionService.propTypes = {
  banner: PropTypes.object,
  cards: PropTypes.object,
  mainCards: PropTypes.object
}

export default React.memo(SectionService)
