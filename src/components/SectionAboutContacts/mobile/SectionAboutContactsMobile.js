import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import css from './SectionAboutContactsMobile.module.scss'
import IconWrapper from '../../IconWrapper/IconWrapper'
import { ADDRESS, EMAIL, MAIN_PHONE, VK_ADDRESS } from '../../../constants/contacts'

const SectionAboutContactsMobile = ({ contacts }) => (
  <LayoutMobile className={css.container}>
    <div >
      <SectionTitleMobile title={'Основные контакты'} />
      <IconWrapper icon={'phone'}>{MAIN_PHONE}</IconWrapper>
      <IconWrapper icon={'address'}>{ADDRESS}</IconWrapper>
      <IconWrapper icon={'mail'}>{EMAIL}</IconWrapper>
      <IconWrapper icon={'vk'}>{VK_ADDRESS}</IconWrapper>
    </div>
  </LayoutMobile>
)
SectionAboutContactsMobile.propTypes = {
  contacts: PropTypes.object
}

export default React.memo(SectionAboutContactsMobile)
