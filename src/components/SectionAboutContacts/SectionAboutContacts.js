import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionAboutContacts.module.scss'
import IconWrapper from '../IconWrapper/IconWrapper'
import { ADDRESS, EMAIL, MAIN_PHONE } from '../../constants/contacts'
import Layout from '../Layout/Layout'

const SectionAboutContacts = ({ contacts }) => (
  <Layout>
    <div className={css.container}>
      <IconWrapper icon={'phone'}>{MAIN_PHONE}</IconWrapper>
      <IconWrapper icon={'address'}>{ADDRESS}</IconWrapper>
      <IconWrapper icon={'mail'}>{EMAIL}</IconWrapper>
    </div>
  </Layout>
)
SectionAboutContacts.propTypes = {
  contacts: PropTypes.object
}

export default React.memo(SectionAboutContacts)
