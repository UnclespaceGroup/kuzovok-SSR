import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import LayoutMobile from '../../Layout/LayoutMobile'
import css from './BannerMobile.module.scss'
import BgImage from '../../BgImage/BgImage'

const BannerMobile = ({ title, text, img, withoutTabs }) => (
  <BgImage img={img}>
    <div className={cn(css.container, { [css.withoutTabs]: withoutTabs })}>
      <LayoutMobile>
        <h1 className={css.title}>{title}</h1>
        <div className={css.text}>{text}</div>
      </LayoutMobile>
    </div>
  </BgImage>
)
BannerMobile.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  img: PropTypes.string,
  withoutTabs: PropTypes.bool
}

export default React.memo(BannerMobile)
