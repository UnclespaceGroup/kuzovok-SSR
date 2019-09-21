import React from 'react'
import Padding from '../../components/Padding/Padding'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
import { PAGE_WORKS } from '../../constants/ROUTES'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import im1 from '../../static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import SectionTabs from '../../components/SectionTabs/SectionTabs'
import SectionSimplePost from '../../components/SectionSimplePost/SectionSimplePost'
import List from '../../components/List/List'

const header = {
  title: 'Лада Приора',
  status: 'В работе',
  img: im1,
  text: <ul>
    <li>Полная покраска автомобиля</li>
    <li>Замена заднего бампера</li>
  </ul>,
  sideBlock: <ControllerSideMenu />
}

const galleryData = {
  photos: [
    {
      src: 'https://lh3.googleusercontent.com/C2lANCLADzL-sub99B29Z3JEnFn4JUE_gA54ZnWTmlNyb7T-pNA7KBenjqqWsHrl2cAGqA1yQHfyZy6SxfW4R73NcaMTFHol2hT6NPbBKh130XnTuBGz0AxB8lsxLtoGvILpAXFW2sNySzNwBw6kdLk9XlLJzxx3j11VqnZFAl4RFBJ2zfyqGMtijPp0_WtmGBTmXYhqPwwk9kjAcEve4JRR2y7wYgkrgtDnLvirJZy0_rQcXTNWsRJh8BKeiosbQ3wpYzcH0qPfQ0heXJsQareQpmSXANkjXWPrSyOzkvmh_l57HX3I4kbclm2MVlGOvUPhxC4qZtyPpa9qrAoNw9SO_gn5szAGx8k4a48CzJ3gYoE2cybZ-wOf45cylbapO5UCn-ev9ME23XVvmm2I5Zrafepw-rj4hYPsujBg6MQRZBdz0nr_-osoUBnQKocjuRLyPzDPEJbuBcEQgNaZkQvKDiFGPFNwxtR9c4VSUzhmcqsIFpdiuE_MT-ztX19biizJ7_AKQUNy3Lfo9xoNHt72CfFvXrQJIVp7UWxg0yHshjTVzrBpRVSs98ijALYMwo8QROsqw-GT5xd8Z_0ss6OchriEyNg0kQCMbHXaoo0K2RK26DV6ZKm0dg3Aq2qJtDnQPkFuOdEeUhb96Exb1KC0A7uuZspji3qAXK5grR45mtu5MwACST0=w876-h657-no',
      width: 4,
      height: 3
    },
    {
      src: 'https://lh3.googleusercontent.com/QquNzEUfWF_tJtidHmSyd_hWUpnA1sVKnPzNoFBnrcX6ZP1BA4yroGaMjjwNcCOQ79xhLOt4awXBB9RbiA8QWu7_n0Yquyz-2C0qXXVdGv7bP-fh16sghG-eOlu2IbFjDE3BjC_IyMWS7fZYLQ5pXABFcBYe_Rk8dcDqewi-WFd4YbNbtPY3M6ldnSIuKGZOTec_F3GnomuzOtlFhvXa20Zj6QSuNh1iEZlADbhWzCwGYFHn_HRvsOkwQJir3267IBaEeuDGErOyUUoG-2glPln7n9hajreJYVFDdJY2X1bQfrv-oNqTOpM5T8L0QmABJS_BBmummqyas2si_J4i-TNPNbQwgQ4jzI3ozizDB5Glnq8UCHwoMkOyFeylnUEjXV5Ng3e7jD-VfZNwce8-ZSYzZsTD-fB9eUlxdL53neuMkJtfi9bwMQlyKl8Y6cZHZ5Y7OKgLa4JCmobw96-ZrAaIUjkiMY5IxIcurRrV_0tJyq6iGxFXNRUeaRDmggxxmAf4diRFlewUV4wsBt6t-kCM1uF405O6qT3t-PbS6Q3UBgbRfFh8A7Wuvj8TDqKk-hsenbCZIEh7WMZSgm4pqr1JWid-8b7XrX4jrgzV74jadmf-ycC60HxYHuJM8uYimc45l4Gp5uIFh1Zs4_pDuZULClzM4yr12GVVeIft3y4qOtU8Y8Yk4jYzpG3Z99yXkh1CVfvSJr90WXVfOjQRSFYi4clFzC2jpk7_5MhfWRwj03Vp=w876-h657-no',
      width: 4,
      height: 3
    },
    {
      width: 4,
      height: 3,
      src: 'https://photos.app.goo.gl/iB2J6BJ82B5WiuFz5'
    }
  ] }

const ContainerWorkDetailDay = () => (
  <>
    <SectionTopBanner backLink={PAGE_WORKS} {...header} />
    <SectionTabs
      items={[
        {
          title: 'Общая информация',
          to: PAGE_WORKS + 1
        },
        {
          title: 'Отчет по дням',
          to: PAGE_WORKS + 1 + '/days'
        }
      ]}
    />
    <List
      items={[
        {
          title: 'Сегодня',
          galleryData,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: '25 августа 2019 года',
          galleryData,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: '24 августа 2019 года',
          galleryData,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]}
    >
      <SectionSimplePost />
    </List>
    <Padding value={150} />
    <SectionContacts />
  </>
)

export default React.memo(ContainerWorkDetailDay)
