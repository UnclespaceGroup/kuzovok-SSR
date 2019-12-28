import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import LayoutMobile from '../../Layout/LayoutMobile'
import css from './BannerMobile.module.scss'
import BgImage from '../../BgImage/BgImage'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import _ from 'lodash'

const BannerMobile = ({ title, text, img, withoutTabs, backLink }) => (
  <BgImage img={img}>
    <div className={cn(css.container, { [css.withoutTabs]: withoutTabs })}>
      <LayoutMobile>
        { backLink && <Link className={css.back} to={backLink}><MdArrowBack /></Link>}
        <h1 className={css.title}>{title}</h1>
        <div className={css.text}>
          {
            Array.isArray(text)
              ? <ul>
                { _.map(text, (item, key) => <li key={key}>{item}</li>) }
              </ul>
              : text
          }
        </div>
      </LayoutMobile>
    </div>
  </BgImage>
)
BannerMobile.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  img: PropTypes.string,
  withoutTabs: PropTypes.bool,
  backLink: PropTypes.string
}

export default React.memo(BannerMobile)
