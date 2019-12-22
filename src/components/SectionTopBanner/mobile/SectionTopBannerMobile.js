import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { scrollWindowTo } from '../../../utils/scrollWindowTo'
import Button from '../../Button/Button'
// import TagsBlockMobile from '../../TagsBlock/mobile/TagsBlockMobile'
import css from './SectionTopBannerMobile.module.scss'
import BgImage from '../../BgImage/BgImage'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import List from '../../List/List'
import TextIcon from '../../TextIcon/TextIcon'
import LayoutMobile from '../../Layout/LayoutMobile'

const SectionTopBannerMobile = ({ img, title, text, children, backLink, status, tags, icons, addIcon, advantages }) => (
  <BgImage img={img}>
    <LayoutMobile className={css.container}>
      <div className={css.content}>
        { backLink && <Link className={css.backLink} to={backLink}><MdArrowBack /></Link> }
        {/* { tags && <TagsBlockMobile tags={tags} />} */}
        <h1 className={css.title}>{title}
          {status && <span>{status}</span>}
        </h1>
        <div className={css.text}>{text}</div>
        <ul className={css.advantages}>
          {_.map(advantages, (item, key) => <li key={key}>{item}</li>)}
        </ul>
        {icons && <List items={icons}>
          <TextIcon />
        </List>}
        {addIcon && addIcon}
        <div>{children}</div>
        <Button className={css.btn} onClick={() => scrollWindowTo('toThis')}>Подробнее</Button>
      </div>
    </LayoutMobile>
    <div id={'toThis'} />
  </BgImage>
)
SectionTopBannerMobile.propTypes = {
  advantages: PropTypes.array,
  children: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  img: PropTypes.node,
  backLink: PropTypes.string,
  status: PropTypes.node,
  tags: PropTypes.array,
  icons: PropTypes.array,
  addIcon: PropTypes.node
}

export default React.memo(SectionTopBannerMobile)
