import React from 'react'
import PropTypes from 'prop-types'
import css from './IconPopap.module.scss'
import { MdMessage } from 'react-icons/md'

const IconPopapDesktop = ({ className }) => {
  // const [ isOpen, setIsOpen ] = useState()
  return (
    <div className={className}>
      <div className={css.icon}>
        <MdMessage />
      </div>
    </div>
  )
}
IconPopapDesktop.propTypes = {
  className: PropTypes.string
}
export default React.memo(IconPopapDesktop)
