import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionAboutMain.module.scss'
import SectionTextWithImage from '../SectionTextWithImage/SectionTextWithImage'
import SectionTextWithImageBlack from '../SectionTextWithImageBlack/SectionTextWithImageBlack'
import Layout from '../Layout/Layout'
import Wysiwyg from '../Wysiwyg/Wysiwyg'
import Content from '../Content/Content'

const SectionAboutMain = ({ block1, block2 }) => (
  <div className={css.container}>
    <Layout >
      <Content width={'60%'}>
        <Wysiwyg>
          <h2>Сервис кузовного ремонта Кузовок</h2>
          <p>Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</p>
        </Wysiwyg>
      </Content>
    </Layout>
    <SectionTextWithImage {...block1} />
    <SectionTextWithImageBlack {...block2} />
  </div>
)
SectionAboutMain.propTypes = {
  block1: PropTypes.object,
  block2: PropTypes.object
}

export default React.memo(SectionAboutMain)
