import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import css from './SectionMainMenuDesktop.module.scss'
import SectionHeaderDesktop from '../SectionHeader/SectionHeaderDesktop'
import SectionOpenMainMenuDesktop from '../SectionOpenMainMenu/SectionOpenMainMenuDesktop'
import Collapse from 'react-collapse'

const SectionMainMenuDesktop = () => {
  const [ open, setOpen ] = useState(false)
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <SectionHeaderDesktop {...{ setOpen, open }} />
        <Collapse isOpened={open} >
          <SectionOpenMainMenuDesktop />
        </Collapse>
      </div>
    </div>
  )
}
SectionMainMenuDesktop.propTypes = {
  // children: PropTypes.node
}

export default React.memo(SectionMainMenuDesktop)
