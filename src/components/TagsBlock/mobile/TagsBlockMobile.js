import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './TagsBlockMobile.module.scss'

const TagsBlockMobile = ({ tags }) => (
  <div className={css.container}>
    {
      _.map(tags, (item, key) => (
        <div className={css.tag} key={key}>#{item}</div>
      ))
    }
  </div>
)
TagsBlockMobile.propTypes = {
  tags: PropTypes.array
}

export default React.memo(TagsBlockMobile)
