import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionAdvantagesColumnMobile from '../../SectionAdvantagesColumn/mobile/SectionAdvantagesColumnMobile'
import WysiwygMobile from '../../Wysiwyg/mobile/WysiwygMobile'
import css from './SectionServiceDetailMobile.module.scss'

const SectionServiceDetailMobile = ({ advantages, text }) => (
  <LayoutMobile className={css.container}>
    <div className={css.content}>
      <SectionAdvantagesColumnMobile items={advantages} />
      <WysiwygMobile >{text}</WysiwygMobile>
    </div>
  </LayoutMobile>
)
SectionServiceDetailMobile.propTypes = {
  advantages: PropTypes.array,
  text: PropTypes.node
}

export default React.memo(SectionServiceDetailMobile)
