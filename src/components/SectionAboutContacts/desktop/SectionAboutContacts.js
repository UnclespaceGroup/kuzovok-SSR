import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionAboutContacts.module.scss'
import IconWrapper from '../../IconWrapper/IconWrapper'
import Layout from '../../Layout/Layout'
import SectionTitle from '../../SectionTitle/desktop/SectionTitle'

const SectionAboutContacts = ({ phone, mail, vk, address }) => (
  <Layout className={css.container}>
    <div >
      <SectionTitle title={'Основные контакты'} />
      {phone && <IconWrapper icon={'phone'}><a href={`tel:${phone}`}>{phone}</a></IconWrapper>}
      {address && <IconWrapper icon={'address'}>{address}</IconWrapper>}
      {mail && <IconWrapper icon={'mail'}>{mail}</IconWrapper>}
      {vk && <IconWrapper icon={'vk'}>{vk}</IconWrapper>}
    </div>
  </Layout>
)
SectionAboutContacts.propTypes = {
  vk: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
  address: PropTypes.string
}

export default React.memo(SectionAboutContacts)
