import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './TagsBlock.module.scss'

const TagsBlock = ({ tags }) => (
  <div className={css.container}>
    {
      _.map(tags, (item, key) => (
        <div className={css.tag} key={key}>#{item}</div>
      ))
    }
  </div>
)
TagsBlock.propTypes = {
  tags: PropTypes.array
}

export default React.memo(TagsBlock)
