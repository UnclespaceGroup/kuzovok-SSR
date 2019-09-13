import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionProductBannerTop.module.scss'
import Layout from '../Layout/Layout'
import { MdArrowBack } from 'react-icons/md'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

const SectionProductBannerTop = ({ title, text, status, backLink }) => (
  <div className={css.container}>
    <Layout>
      <div className={css.title}>
        { backLink && <Link className={css.back} to={backLink} ><MdArrowBack size={'3rem'} /></Link>}
        {title}<span>{status}</span></div>
      <div className={css.text}>{text}</div>
    </Layout>
  </div>
)
SectionProductBannerTop.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  status: PropTypes.node,
  backLink: PropTypes.string
}

export default compose(
  React.memo
)(SectionProductBannerTop)
