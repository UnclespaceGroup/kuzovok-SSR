import React from 'react'
// import PropTypes from 'prop-types'
import css from './SectionAboutMain.module.scss'
import Layout from '../../Layout/Layout'
import Wysiwyg from '../../Wysiwyg/desktop/Wysiwyg'
import Content from '../../Content/Content'

const SectionAboutMain = () => (
  <div className={css.container}>
    <Layout >
      <Content width={'60%'}>
        <Wysiwyg>
          {`<h2>Станция кузовного ремонта Кузовок</h2>
          <p>Предлагаем все виды кузовных и покрасочных работ в городе Сыктывкар</p>
          <ul>
            <li>Покарска автомобиля</li>
            <li>Кузовные работы</li>
            <li>Покрытие антигравием</li>
          </ul>
          <p>
          dsfms'ldmckmsd'kcmsdmcksdmkcmd mdskm ksdk mkds;c msd;mksdk mkdskcsdmcsdk;m
          dsfms'ldmckmsd'kcmsdmcksdmkcmd mdskm ksdk mkds;c msd;mksdk mkdskcsdmcsdk;m
          dsfms'ldmckmsd'kcmsdmcksdmkcmd mdskm ksdk mkds;c msd;mksdk mkdskcsdmcsdk;m
          dsfms'ldmckmsd'kcmsdmcksdmkcmd mdskm ksdk mkds;c msd;mksdk mkdskcsdmcsdk;m
          dsfms'ldmckmsd'kcmsdmcksdmkcmd mdskm ksdk mkds;c msd;mksdk mkdskcsdmcsdk;m
          dsfms'ldmckmsd'kcmsdmcksdmkcmd mdskm ksdk mkds;c msd;mksdk mkdskcsdmcsdk;m
</p>

`}
        </Wysiwyg>
      </Content>
    </Layout>
  </div>
)
SectionAboutMain.propTypes = {}

export default React.memo(SectionAboutMain)
