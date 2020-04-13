import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import LayoutMobile from 'components/Layout/LayoutMobile'
import css from './BannerMobile.module.scss'
import BgImage from 'components/BgImage/BgImage'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import _ from 'lodash'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import Button from 'components/Button/Button'

const BannerMobile = ({ title, text, img, withoutTabs, backLink }) => (
  <BgImage img={img} withLoader>
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
          <Button className={css.btn} onClick={() => scrollWindowTo('toThis')}>Подробнее</Button>
        </div>
      </LayoutMobile>
    </div>
    <div id={'toThis'} />
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
