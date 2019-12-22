import React from 'react'
import PropTypes from 'prop-types'
import css from './Banner.module.scss'
import BgImage from '../../BgImage/BgImage'
import Layout from '../../Layout/Layout'
import cn from 'classnames'

const Banner = ({ title, text, img, icon, withoutTabs }) => (
  <BgImage img={img}>
    <div className={cn(css.container, { [css.withoutTabs]: withoutTabs })}>
      <Layout>
        <div className={css.row}>
          {icon && <div className={css.icon} style={{ backgroundImage: `url(${icon})` }} />}
          <div>
            <h1 className={css.title}>{title}</h1>
            <div className={css.text}>{text}</div>
          </div>
        </div>
      </Layout>
    </div>
  </BgImage>
)
Banner.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  img: PropTypes.string,
  icon: PropTypes.string,
  withoutTabs: PropTypes.bool
}

export default React.memo(Banner)
