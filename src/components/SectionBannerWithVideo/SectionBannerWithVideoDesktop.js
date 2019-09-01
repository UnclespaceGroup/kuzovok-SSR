import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionBannerWithVideo.module.scss'
import Layout from '../Layout/Layout'
import YouTube from 'react-youtube'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const opts = {
  height: '100vh',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    disablekb: 1,
    fs: 0,
    iv_load_policy: 3,
    loop: 1,
    playlist: 'GJAvbThKKro',
    modestbranding: 1,
    mute: 1,
    showinfo: 0
  }
}

const SectionBannerWithVideoDesktop = ({ url, title, text, button }) => (
  <div className={css.container}>
    <YouTube
      allowfullscreen='allowfullscreen'
      videoId='GJAvbThKKro'
      opts={opts}
      onReady
      className={css.video}
    />
    <Layout>
      <div className={css.wrapper}>
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>
        <div className={css.button}>{button}</div>
      </div>
      <div className={css.buttons}>
        <div className={css.prev} ><MdKeyboardArrowLeft size={'2rem'} /></div>
        <div className={css.next} >Следующее видео<MdKeyboardArrowRight size={'2rem'} /></div>
      </div>
    </Layout>
  </div>
)
SectionBannerWithVideoDesktop.propTypes = {
  url: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  button: PropTypes.node
}

export default React.memo(SectionBannerWithVideoDesktop)
