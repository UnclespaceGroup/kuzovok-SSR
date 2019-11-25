import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import PropTypes from 'prop-types'
import css from './SectionGalleryVerticalMobile.module.scss'
import _ from 'lodash'
import cn from 'classnames'
import Button from '../../Button/Button'

const SectionGalleryVerticalMobile = ({ photos = [], className }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [viewAll, setViewAll] = useState(false)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div className={cn(css.container, className)}>
      <div >
        {
          _.map(viewAll ? photos : photos.slice(0, 2), (item, key) => (
            <div key={key} onClick={() => openLightbox(key)} className={css.image} style={{ backgroundImage: `url(${item})` }} />
          ))
        }
        { (photos.length > 2) && <Button className={css.btn} onClick={() => setViewAll(!viewAll)}>{viewAll ? 'Скрыть' : `Показать ещё ${photos.length - 2} фото`}</Button>}
      </div>
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
SectionGalleryVerticalMobile.propTypes = {
  photos: PropTypes.array,
  className: PropTypes.string
}

export default React.memo(SectionGalleryVerticalMobile)
