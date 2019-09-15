import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTopBanner.module.scss'
import BgImage from '../BgImage/BgImage'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

const SectionTopBanner = ({ img, title, text, children, sideBlock, backLink, status }) => (
  <BgImage img={img}>
    <div className={css.container}>
      <div className={css.side}>{sideBlock}</div>
      <div className={css.content}>
        { backLink && <Link className={css.backLink} to={backLink}><MdArrowBack /></Link> }
        <h1 className={css.title}>{title}<span>{status}</span></h1>
        <div className={css.text}>{text}</div>
        <div className={css.children}>{children}</div>
      </div>
    </div>
  </BgImage>
)
SectionTopBanner.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  sideBlock: PropTypes.node,
  img: PropTypes.node,
  backLink: PropTypes.string,
  status: PropTypes.node
}

export default React.memo(SectionTopBanner)
