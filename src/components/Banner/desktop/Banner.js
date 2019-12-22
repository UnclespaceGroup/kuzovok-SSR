import React from 'react'
import PropTypes from 'prop-types'
import css from './Banner.module.scss'
import BgImage from '../../BgImage/BgImage'
import Layout from '../../Layout/Layout'

const Banner = ({ title, text, img, icon }) => (
  <BgImage img={img}>
    <div className={css.container}>
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
  icon: PropTypes.string
}

export default React.memo(Banner)
