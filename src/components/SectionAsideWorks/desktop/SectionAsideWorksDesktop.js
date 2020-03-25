import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/SectionAsideWorks/desktop/SectionAsideWorks.module.scss'
import _ from 'lodash'
import TagStatus from 'components/TagStatus/TagStatus'
import { Link } from 'react-router-dom'
import { PAGE_WORKS } from 'constants/ROUTES'
import Button from 'components/Button/Button'

const SectionAsideWorksDesktop = ({ list }) => (
  <div className={css.wrapper}>
    <div className={css.mainTitle} >Другие работы</div>
    {
      _.map(list, (item, key) => (
        <Link to={item.to} key={key} className={css.item}>
          <div className={css.title}>{item.title}
            { (item.status === '1') && <TagStatus className={css.type} status={item.status} />}
          </div>
          <div className={css.text}>{item.annotation}</div>
        </Link>
      ))
    }
    <Button to={PAGE_WORKS} >Показать все</Button>
  </div>
)
SectionAsideWorksDesktop.propTypes = {
  list: PropTypes.array
}
export default React.memo(SectionAsideWorksDesktop)
