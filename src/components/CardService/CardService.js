import React from 'react'
import PropTypes from 'prop-types'
import css from './CardService.module.scss'

const CardService = ({ title }) => (
  <div className={css.container}>
    <div className={css.title}>{title}</div>
  </div>
)
CardService.propTypes = {
  title: PropTypes.node
}

export default React.memo(CardService)
