import React from 'react'
import css from 'components/SectionCookie/mobile/SectionCookieMobile.module.scss'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'
import LayoutMobile from 'components/Layout/LayoutMobile'

const SectionCookieMobile = ({ text, onClose }) => (
  <div className={css.container}>
    <LayoutMobile>
      <div className={css.wrapper}>
        {text}
        <MdClose className={css.close} onClick={onClose} />
      </div>
    </LayoutMobile>
  </div>
)
SectionCookieMobile.propTypes = {
  text: PropTypes.any,
  onClose: PropTypes.func
}
export default React.memo(SectionCookieMobile)
