import React, { useState, useCallback } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import PropTypes from 'prop-types'
import css from './SectionGallery.module.scss'
import Gallery from 'react-photo-gallery'
import Layout from '../Layout/Layout'

const SectionGallery = ({ photos = [] }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <div className={css.container}>
      <Layout>
        <Gallery photos={photos} onClick={openLightbox} />
      </Layout>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
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
