import React from 'react'
// import PropTypes from 'prop-types'
import css from './SectionHeaderDesktop.module.scss'
import BlockHeaderDesktop from '../BlockHeader/BlockHeaderDesktop'

const SectionHeaderDesktop = () => (
  <div className={css.container}>
    <BlockHeaderDesktop />
  </div>
)
SectionHeaderDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionHeaderDesktop)
