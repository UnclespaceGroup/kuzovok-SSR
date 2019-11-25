import React from 'react'
import PropTypes from 'prop-types'
import LayoutMobile from '../../Layout/LayoutMobile'
import WysiwygMobile from '../../Wysiwyg/mobile/WysiwygMobile'
import css from './SectionAboutMainMobile.module.scss'
import Content from '../../Content/Content'
import Padding from '../../Padding/Padding'

const SectionAboutMainMobile = ({ block2 }) => (
  <div className={css.container}>
    <LayoutMobile >
      <Content >
        <WysiwygMobile>
          {`<h2>Станция кузовного ремонта Кузовок</h2>
          <p>Предлагаем все виды кузовных и покрасочных работ в городе Сыктывкар</p>
          <ul>
            <li>Покарска автомобиля</li>
          </ul>`}
        </WysiwygMobile>
      </Content>
    </LayoutMobile>
    <Padding value={40} />
  </div>
)
SectionAboutMainMobile.propTypes = {
  block2: PropTypes.object
}

export default React.memo(SectionAboutMainMobile)
