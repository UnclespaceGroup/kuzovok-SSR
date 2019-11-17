import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionAboutPhotos.module.scss'
import SectionTextWithImage from '../SectionTextWithImage/SectionTextWithImage'
import SectionTextWithImageBlack from '../SectionTextWithImageBlack/SectionTextWithImageBlack'

const SectionAboutPhotos = ({ block1, block2 }) => (
  <div className={css.container}>
    photos
    <SectionTextWithImage {...block1} />
    <SectionTextWithImageBlack {...block2} />
  </div>
)
SectionAboutPhotos.propTypes = {
  block1: PropTypes.object,
  block2: PropTypes.object
}

export default React.memo(SectionAboutPhotos)
