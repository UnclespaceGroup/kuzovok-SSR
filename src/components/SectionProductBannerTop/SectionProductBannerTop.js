import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionProductBannerTop.module.scss'
import Layout from '../Layout/Layout'
import { MdArrowBack } from 'react-icons/md'
import { compose } from 'redux'
import { withRouter } from 'react-router'

const SectionProductBannerTop = ({ title, text, history, status, withArrowBack }) => (
  <div className={css.container}>
    <Layout>
      <div className={css.title}>
        { withArrowBack && <div className={css.back} onClick={() => history.goBack()}><MdArrowBack size={'3rem'} /></div>}
        {title}<span>{status}</span></div>
      <div className={css.text}>{text}</div>
    </Layout>
  </div>
)
SectionProductBannerTop.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  history: PropTypes.object,
  status: PropTypes.node,
  withArrowBack: PropTypes.bool
}

export default compose(
  withRouter,
  React.memo
)(SectionProductBannerTop)
