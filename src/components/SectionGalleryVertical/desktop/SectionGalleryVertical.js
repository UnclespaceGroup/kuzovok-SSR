import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import PropTypes from 'prop-types'
import css from './SectionGalleryVertical.module.scss'
import _ from 'lodash'
import cn from 'classnames'
import Button from 'components/Button/Button'
import { MdFullscreen } from 'react-icons/md'

const SectionGalleryVertical = ({ photos = [], className }) => {
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

  if (!photos) return <div />

  return (
    <div className={cn(css.container, className)}>
      <div className={css.row}>
        {
          _.map(viewAll ? photos : photos.slice(0, 4), (item, key) => (
            <div key={key} onClick={() => openLightbox(key + 1)} className={css.image} style={{ backgroundImage: `url(${item})` }} >
              <div className={css.hoverBlock} ><MdFullscreen /></div>
            </div>
          ))
        }
      </div>
      { (photos.length > 5) && <Button className={css.btn} onClick={() => setViewAll(!viewAll)}>{viewAll ? 'Скрыть' : `Показать ещё ${photos.length - 2} фото`}</Button>}
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
SectionGalleryVertical.propTypes = {
  photos: PropTypes.array,
  className: PropTypes.string
}

export default React.memo(SectionGalleryVertical)
