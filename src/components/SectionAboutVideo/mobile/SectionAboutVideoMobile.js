import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import LayoutMobile from '../../Layout/LayoutMobile'
import SectionTitleMobile from '../../SectionTitle/mobile/SectionTitleMobile'
import YouTubeComponentMobile from '../../YouTube/mobile/YouTubeComponentMobile'
import css from './SectionAboutVideoMobile.module.scss'

const SectionAboutVideoMobile = ({ videos }) => (
  <LayoutMobile className={css.container}>
    <SectionTitleMobile title={'Видео'} />
    <div>
      {
        _.map(videos, (video, key) => (
          <div className={css.block} key={key}>
            <YouTubeComponentMobile {...video} />
          </div>
        ))
      }
    </div>
  </LayoutMobile>
)
SectionAboutVideoMobile.propTypes = {
  videos: PropTypes.array
}

export default React.memo(SectionAboutVideoMobile)
