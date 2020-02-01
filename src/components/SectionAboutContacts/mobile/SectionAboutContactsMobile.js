import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import css from './SectionAboutContactsMobile.module.scss'
import IconWrapper from '../../IconWrapper/IconWrapper'

const SectionAboutContactsMobile = ({ phone, mail, vk, address }) => (
  <LayoutMobile className={css.container}>
    <div >
      <SectionTitleMobile title={'Основные контакты'} />
      {phone && <IconWrapper icon={'phone'}><a href={`tel:${phone}`}>{phone}</a></IconWrapper>}
      {address && <IconWrapper icon={'address'}>{address}</IconWrapper>}
      {mail && <IconWrapper icon={'mail'}>{mail}</IconWrapper>}
      {vk && <IconWrapper icon={'vk'}>{vk}</IconWrapper>}
    </div>
  </LayoutMobile>
)
SectionAboutContactsMobile.propTypes = {
  vk: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
  address: PropTypes.string
}

export default React.memo(SectionAboutContactsMobile)
