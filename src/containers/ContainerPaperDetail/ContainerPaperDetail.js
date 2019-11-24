import React from 'react'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import img from '../../static/images/allfons.jpg'
import ControllerSideMenu from '../ControllerSideMenu/ControllerSideMenu'
import Layout from '../../components/Layout/Layout'
import Padding from '../../components/Padding/Padding'
import { MdVideoLibrary, MdAccessTime } from 'react-icons/md'
import TextIcon from '../../components/TextIcon/TextIcon'
import SectionContacts from '../../components/SectionContacts/desktop/SectionContacts'
import SectionPaperDetail from '../../components/SectionPaperDetail/SectionPaperDetail'

const img1 = 'https://lh3.googleusercontent.com/nR1gVDct70WoCxOJ-l6SiH32NAXvbbWyBtv-8BDPeQp66RDtBNWtsYy1B5todVxMpOY4iJ4kCN3m-eISZi4egRKRSEoR5sEU4gxiXdauwxc9kKEaXUZFplYxRlUWLy9XI7HXd61exbl7RxleFpC7O0aQk8AoqHTlMB_TfGSWTh13Ttb89MfMQoCvpLAQSzOLYrojcSJqa2G9vkMsgoZFBKqmLs6ID5tkm3VrTkn5Kbepp9PRpwBdjserw_6Nn_JaN5yrocwaJ-xRO2ugeCTLh816Z7QwbDlJH5KBVqgMgIvtq7mlWhcMV6bas6Ic4RwiVMCDU1GGnoiN2aet7kc7yka100LV4P2eVJnsZhEztSxlgvvoK7s05WDl5x2kX9ZpjkPl6AcjR3vA3nmWyqTYtnepNu5gvCDIQcv31flKELjsF443oVe_fbu35X4LUqXECVSw8I7pki-EsSSwpjiTpJdwiu4iPN6xZ_hMLAxYgEHJF5EKruvfnEkRpmcbjrN8zARo0TGbPqn5WoD6x37WgCi1FIDEesNEeRa1Sv7bYvUBVA1wgFvgxuQF33J1WID7kzYwlC7HusP2RR4zvAtWYL-cOgpPIymkE_JIF1aEoauOoei4SbBG_f1tOpStm4KDuUj-kC28A_L82oUIaHZa7us74JInWJFz1noRmxAkCPNn0zgTkzLYUUANUTfX4lpDuPdPrmfaYSRVx2H8OsalpLa2qUKOTnek9mcZuUiGnYhKzGqE=w1292-h969-no'

const ContainerPaperDetail = () => (
  <>
    <SectionTopBanner
      {...{
        title: 'Правка кузова',
        text: 'Как поправить, чтоб шикарно было',
        img: img,
        sideBlock: <ControllerSideMenu />
      }}
    >
      <TextIcon icon={<MdAccessTime />}>Время чтения 5 минут</TextIcon>
      <TextIcon to={'/'} icon={<MdVideoLibrary />}>Видео</TextIcon>
    </SectionTopBanner>
    <Layout width={750}>
      <Padding value={60} />
      <SectionPaperDetail >
        <h2>Кузовной ремонт автомобиля без покраски</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={img1} alt={'photo'} />
        <span><b>Фотография</b></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={img1} alt={'photo'} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
      </SectionPaperDetail>
    </Layout>
    <SectionContacts />
    <Padding value={120} />
  </>
)

export default React.memo(ContainerPaperDetail)
