import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionProductVideoBanner.module.scss'
import Layout from '../Layout/Layout'
import YouTube from 'react-youtube'

const opts = {
  height: '100vh',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    // controls: 0,
    // disablekb: 1,
    fs: 0,
    iv_load_policy: 3,
    loop: 1,
    modestbranding: 1,
    showinfo: 0
  }
}

const SectionProductVideoBanner = ({ text, videoId }) => (
  <div className={css.container}>
    <Layout>
      <YouTube
        allowfullscreen='allowfullscreen'
        videoId={videoId}
        opts={opts}
        // onReady
        className={css.video}
      />
    </Layout>
    <div className={css.wrapper}>
      <Layout>
        <div className={css.text}>{text}</div>
      </Layout>
    </div>
  </div>
)
SectionProductVideoBanner.propTypes = {
  text: PropTypes.node,
  videoId: PropTypes.string
}

export default React.memo(SectionProductVideoBanner)
