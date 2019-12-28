import React from 'react'
import PropTypes from 'prop-types'
import css from './Banner.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'
import cn from 'classnames'
import _ from 'lodash'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Banner = ({ title, text, img, icon, withoutTabs, backLink }) => (
  <BgImage img={img}>
    <div className={cn(css.container, { [css.withoutTabs]: withoutTabs })}>
      <Layout>
        { backLink && <Link className={css.back} to={backLink}><MdArrowBack /></Link>}
        <div className={css.row}>
          {icon && <div className={css.icon} style={{ backgroundImage: `url(${icon})` }} />}
          <div>
            <h1 className={css.title}>{title}</h1>
            <div className={css.text}>{
              Array.isArray(text)
                ? <ul>
                  { _.map(text, (item, key) => <li key={key}>{item}</li>) }
                </ul>
                : text
            }</div>
          </div>
        </div>
      </Layout>
    </div>
  </BgImage>
)
Banner.propTypes = {
  title: PropTypes.node,
  backLink: PropTypes.string,
  text: PropTypes.node,
  img: PropTypes.string,
  icon: PropTypes.string,
  withoutTabs: PropTypes.bool
}

export default React.memo(Banner)
