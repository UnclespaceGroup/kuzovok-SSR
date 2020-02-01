import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/SectionAboutPhotos/desktop/SectionAboutPhotos.module.scss'
import WysiwygMobile from 'components/Wysiwyg/mobile/WysiwygMobile'
import LayoutMobile from 'components/Layout/LayoutMobile'

const SectionAboutPhotosMobile = ({ text }) => (
  <LayoutMobile className={css.container}>
    <WysiwygMobile>{text}</WysiwygMobile>
  </LayoutMobile>
)
SectionAboutPhotosMobile.propTypes = {
  text: PropTypes.string
}

export default React.memo(SectionAboutPhotosMobile)
