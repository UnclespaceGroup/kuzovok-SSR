import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../Layout/Layout'
import SectionAdvantagesColumnDesktop from 'components/SectionAdvantagesColumn/desktop/SectionAdvantagesColumnDesktop'
import Wysiwyg from '../../Wysiwyg/desktop/Wysiwyg'
import css from './SectionServiceDetailDesktop.module.scss'

const SectionServiceDetailDesktop = ({ advantages, text }) => (
  <Layout className={css.container}>
    <div className={css.content}>
      <SectionAdvantagesColumnDesktop items={advantages} />
      <Wysiwyg >{text}</Wysiwyg>
    </div>
    <div className={css.widget}>
      {/* <WidgetServiceDetailDesktop /> */}
    </div>
  </Layout>
)
SectionServiceDetailDesktop.propTypes = {
  advantages: PropTypes.array,
  text: PropTypes.node
}

export default React.memo(SectionServiceDetailDesktop)
