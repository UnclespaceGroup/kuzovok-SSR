import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTopBannerMobile.module.scss'
import BgImage from '../../BgImage/BgImage'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import TagsBlock from '../../TagsBlock/TagsBlock'
import List from '../../List/List'
import TextIcon from '../../TextIcon/TextIcon'
import LayoutMobile from '../../Layout/LayoutMobile'

const SectionTopBannerMobile = ({ img, title, text, children, backLink, status, tags, icons, addIcon }) => (
  <BgImage img={img}>
    <LayoutMobile className={css.container}>
      <div className={css.content}>
        { backLink && <Link className={css.backLink} to={backLink}><MdArrowBack /></Link> }
        { tags && <TagsBlock tags={tags} />}
        <h1 className={css.title}>{title}<span>{status}</span></h1>
        <div className={css.text}>{text}</div>
        {icons && <List items={icons}>
          <TextIcon />
        </List>}
        {addIcon && addIcon}
        <div className={css.children}>{children}</div>
      </div>
    </LayoutMobile>
  </BgImage>
)
SectionTopBannerMobile.propTypes = {
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
