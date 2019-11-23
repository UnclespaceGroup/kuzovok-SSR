import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionAboutContacts.module.scss'
import IconWrapper from '../IconWrapper/IconWrapper'
import { ADDRESS, EMAIL, MAIN_PHONE, VK_ADDRESS } from '../../constants/contacts'
import Layout from '../Layout/Layout'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionAboutContacts = ({ contacts }) => (
  <Layout className={css.container}>
    <div >
      <SectionTitle title={'Основные контакты'} />
      <IconWrapper icon={'phone'}>{MAIN_PHONE}</IconWrapper>
      <IconWrapper icon={'address'}>{ADDRESS}</IconWrapper>
      <IconWrapper icon={'mail'}>{EMAIL}</IconWrapper>
      <IconWrapper icon={'vk'}>{VK_ADDRESS}</IconWrapper>
    </div>
  </Layout>
)
SectionAboutContacts.propTypes = {
  contacts: PropTypes.object
}

export default React.memo(SectionAboutContacts)
