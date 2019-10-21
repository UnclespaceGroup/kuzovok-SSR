import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import PropTypes from 'prop-types'
import css from './SectionGallery.module.scss'
import Layout from '../Layout/Layout'
import _ from 'lodash'
import cn from 'classnames'

const SectionGallery = ({ photos = [] }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div className={css.container}>
      <Layout className={css.row}>
        {
          _.map(photos, (item, key) => (
            <div className={cn(css.image, ((key % 5 === 1 || key % 5 === 0) && photos.length !== 3) ? css.big : css.mini)} onClick={() => { openLightbox(key) }} key={key} style={{ backgroundImage: `url(${item})` }} />
          ))
        }
        {
          photos.length % 5 === 4 && <div className={css.mini} />
        }
      </Layout>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                src: x,
                srcset: '',
                caption: ''
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
SectionGallery.propTypes = {
  photos: PropTypes.array
}

export default React.memo(SectionGallery)
