import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from './IconPopap.module.scss'
import cn from 'classnames'
import { MdMessage, MdPhone, MdClose } from 'react-icons/md'
import { FaVk } from 'react-icons/fa'
import { EMAIL, MAIN_PHONE, VK_ADDRESS } from 'constants/contacts'

const IconPopapDesktop = ({ className }) => {
  const [ isOpen, setIsOpen ] = useState()
  return (
    <div className={cn(className)}>
      <div className={css.wrapper}>
        {
          isOpen && <div className={css.modal}>
            <div className={css.item}><MdMessage />{EMAIL}</div>
            <div className={css.item}><MdPhone />{MAIN_PHONE}</div>
            <div className={css.item}><FaVk />{VK_ADDRESS}</div>
            <div className={css.close} onClick={() => setIsOpen(false)}><MdClose /></div>
          </div>
        }
        <div className={css.icon} onClick={() => setIsOpen(!isOpen)}>
          <MdMessage />
        </div>
      </div>
    </div>
  )
}
IconPopapDesktop.propTypes = {
  className: PropTypes.string
}
export default React.memo(IconPopapDesktop)
