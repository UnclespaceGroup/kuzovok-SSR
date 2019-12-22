import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import css from './SectionTextWithImageBlackMobile.module.scss'

const SectionTextWithImageBlackMobile = ({ title, text, img }) => (
  <div className={css.container}>
    <LayoutMobile>
      <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </LayoutMobile>
  </div>
)
SectionTextWithImageBlackMobile.propTypes = {
  title: PropTypes.node,
  img: PropTypes.node,
  text: PropTypes.node
}

export default React.memo(SectionTextWithImageBlackMobile)
