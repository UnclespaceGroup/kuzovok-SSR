import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionServices.module.scss'
import SectionTopBanner from '../SectionTopBanner/SectionTopBanner'
import FieldInput from '../FieldInput/FieldInput'
import Button from '../Button/Button'
import RowCards from '../RowCards/RowCards'
import CardCatalogImage from '../CardCatalogImage/CardCatalogImage'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import SectionContacts from '../SectionContacts/SectionContacts'
import CardCatalogSizeble from '../CardCatalogSizeble/CardCatalogSizeble'
import RowSizeble from '../RowSizeble/RowSizeble'
import { Field, Form } from 'react-final-form'

const SectionServices = ({ banner, mainCards, cards, onSearchClick }) => (
  <div className={css.container}>
    <SectionTopBanner {...banner} >
      <Form className={css.form}
        onSubmit={onSearchClick}
        render={({ handleSubmit }) => (
          <form className={css.form} onSubmit={handleSubmit} >
            <Field
              name={'search'}
              component={FieldInput}
              placeholder={'Поиск услуги'}
            />
            <Button type={'submit'} >Искать</Button>
          </form>
        )}
      />
    </SectionTopBanner>
    <Layout className={css.layout}>
      <Padding value={120} />
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
      <SectionContacts />
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
