import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionAboutMain.module.scss'
import SectionTextWithImageBlack from '../SectionTextWithImageBlack/SectionTextWithImageBlack'
import Layout from '../Layout/Layout'
import Wysiwyg from '../Wysiwyg/Wysiwyg'
import Content from '../Content/Content'
import Padding from '../Padding/Padding'

const SectionAboutMain = ({ block2 }) => (
  <div className={css.container}>
    <Layout >
      <Content width={'60%'}>
        <Wysiwyg>
          <h2>Станция кузовного ремонта Кузовок</h2>
          <p>Предлагаем все виды кузовных и покрасочных работ в городе Сыктывкар</p>
          <ul>
            <li>Покарска автомобиля</li>
          </ul>
        </Wysiwyg>
      </Content>
    </Layout>
    <Padding value={40} />
    <SectionTextWithImageBlack {...block2} />
  </div>
)
SectionAboutMain.propTypes = {
  block1: PropTypes.object,
  block2: PropTypes.object
}

export default React.memo(SectionAboutMain)
