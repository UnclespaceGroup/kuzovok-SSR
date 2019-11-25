import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import css from './SectionTextWithImageMobile.module.scss'

const SectionTextWithImageDesktop = ({ title, text, img }) => (
  <div className={css.container}>
    <LayoutMobile>
      <div className={css.row}>
        <div className={css.col}>
          <div className={css.title}>{title}</div>
          <div className={css.text}>{text}</div>
        </div>
        <div className={css.col}>
          <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
        </div>
      </div>
    </LayoutMobile>
  </div>
)
SectionTextWithImageDesktop.propTypes = {
  title: PropTypes.node,
  img: PropTypes.node,
  text: PropTypes.node
}

export default React.memo(SectionTextWithImageDesktop)
