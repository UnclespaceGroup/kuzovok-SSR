import React from 'react'
import PropTypes from 'prop-types'
import css from './YouTubeComponentMobile.module.scss'
import YouTube from 'react-youtube'

const YouTubeComponentMobile = ({ video, title, text }) => (
  <div className={css.container}>
    <YouTube
      allowfullscreen='allowfullscreen'
      videoId={video}
      opts={{
        playerVars: { // https://developers.google.com/youtube/player_parameters
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          playlist: video,
          modestbranding: 1,
          showinfo: 0
        }
      }}
      // onReady
      className={css.video}
    />
    <div className={css.block}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </div>
  </div>
)
YouTubeComponentMobile.propTypes = {
  video: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node
}

export default React.memo(YouTubeComponentMobile)
