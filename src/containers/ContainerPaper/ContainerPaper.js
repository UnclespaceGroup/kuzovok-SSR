import React from 'react'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import img from '../../static/images/allfons.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import List from '../../components/List/List'
import { PAGE_PAPER } from '../../constants/ROUTES'
import im from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import CardPaperItem from '../../components/CardPaperItem/CardPaperItem'
import Layout from '../../components/Layout/Layout'
import Padding from '../../components/Padding/Padding'

const ContainerPaper = () => (
  <>
    <SectionTopBanner
      {...{
        title: 'Полезные статьи',
        text: '',
        img: img,
        sideBlock: <ControllerSideMenu />
      }}
    />
    <Layout>
      <Padding value={120} />
      <List
        marginBetween={80}
        items={[
          {
            title: 'Обработка антигравийной смесью',
            date: 'Опубликовано 3 дня назад',
            actor: 'Автор: Алексей Миранчук',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            to: PAGE_PAPER + '5',
            img: im
          },
          {
            title: 'Обработка антигравийной смесью',
            date: 'Опубликовано 3 дня назад',
            actor: 'Автор: Алексей Миранчук',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            to: PAGE_PAPER + '5',
            img: im
          }
        ]}
      >
        <CardPaperItem />
      </List>
      <Padding value={120} />
    </Layout>
  </>
)

export default React.memo(ContainerPaper)
