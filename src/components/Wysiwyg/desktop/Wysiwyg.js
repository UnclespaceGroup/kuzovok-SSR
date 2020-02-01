import React from 'react'
import PropTypes from 'prop-types'
import css from './Wysiwyg.module.scss'
import useWysiwyg from 'components/Wysiwyg/useWysiwyg'

const Wysiwyg = ({ children, width }) => {
  const { text } = useWysiwyg({ children })
  return (
    <div className={css.container} style={{ width }} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
Wysiwyg.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
}

export default React.memo(Wysiwyg)
