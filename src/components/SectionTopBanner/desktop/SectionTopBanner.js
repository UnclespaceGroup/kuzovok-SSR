import React from 'react'
import PropTypes from 'prop-types'
import { scrollWindowTo } from '../../../utils/scrollWindowTo'
import Button from '../../Button/Button'
import css from './SectionTopBanner.module.scss'
import BgImage from '../../BgImage/BgImage'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
// import TagsBlock from '../../TagsBlock/desktop/TagsBlock'
import List from '../../List/List'
import TextIcon from '../../TextIcon/TextIcon'
import ControllerSideMenu from '../../../containers/ControllerSideMenu/ControllerSideMenu'

const SectionTopBanner = ({ img, title, text, children, sideBlock, backLink, status, tags, icons, addIcon, advantages }) => (
  <BgImage img={img}>
    <div className={css.container}>
      <div className={css.side}>{sideBlock}</div>
      <div className={css.content}>
        { backLink && <Link className={css.backLink} to={backLink}><MdArrowBack /></Link> }
        {/* { tags && <TagsBlock tags={tags} />} */}
        <h1 className={css.title}>{title}<span>{status}</span></h1>
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
    </div>
    <div id={'toThis'} />
  </BgImage>
)
SectionTopBanner.propTypes = {
  advantages: PropTypes.array,
  children: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  sideBlock: PropTypes.node,
  img: PropTypes.node,
  backLink: PropTypes.string,
  status: PropTypes.node,
  tags: PropTypes.array,
  icons: PropTypes.array,
  addIcon: PropTypes.node
}
SectionTopBanner.defaultProps = {
  sideBlock: <ControllerSideMenu />
}

export default React.memo(SectionTopBanner)
