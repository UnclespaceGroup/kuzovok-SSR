import React from 'react'
import css from './SectionCookie.module.scss'
import PropTypes from 'prop-types'
import Layout from 'components/Layout/Layout'
import { MdClose } from 'react-icons/md'

const SectionCookieDesktop = ({ text, onClose }) => (
  <div className={css.container}>
    <Layout>
      <div className={css.wrapper}>
        {text}
        <MdClose className={css.close} onClick={onClose} />
      </div>
    </Layout>
  </div>
)
SectionCookieDesktop.propTypes = {
  text: PropTypes.any,
  onClose: PropTypes.func
}
export default React.memo(SectionCookieDesktop)
