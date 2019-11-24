import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './SectionAboutVideo.module.scss'
import SectionTitle from '../SectionTitle/desktop/SectionTitle'
import YouTube from '../YouTube/YouTubeComponent'
import Layout from '../Layout/Layout'

const SectionAboutVideo = ({ videos }) => (
  <Layout className={css.container}>
    <SectionTitle title={'Видео'} />
    <div>
      {
        _.map(videos, (video, key) => (
          <div className={css.block} key={key}>
            <YouTube {...video} />
          </div>
        ))
      }
    </div>
  </Layout>
)
SectionAboutVideo.propTypes = {
  videos: PropTypes.array
}

export default React.memo(SectionAboutVideo)
