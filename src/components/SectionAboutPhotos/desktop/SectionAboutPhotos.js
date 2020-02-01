import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/SectionAboutPhotos/desktop/SectionAboutPhotos.module.scss'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import Layout from 'components/Layout/Layout'

const SectionAboutPhotos = ({ text }) => (
  <Layout className={css.container}>
    <Wysiwyg>{text}</Wysiwyg>
  </Layout>
)
SectionAboutPhotos.propTypes = {
  text: PropTypes.string
}

export default React.memo(SectionAboutPhotos)
