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
      src: 'https://lh3.googleusercontent.com/I7l9QWHqIo_TCUClUQSflP9QmacHMgu88W9ICL4nxUrPmFRIrJW6pg-tuUi3B1iCUFG1a5_IZuzJhS2m1GYGqMKiWRmSCUF-meDf8k7e8aoWwPJQRfX-DmofXr6dGjx5kohEnjBhZZvcX2bl4YocBB7AGkJfxOiGtZtuTAxMAmtDW2KxqXeKN_h1H0YNtk63ZVELHsS4U3ceSIaSX7xdSqZE16vQNbGR6z4hNgbNWqTonYjUc0b-RTcBUJSNps6OqeiwnFg5syAKuRSDze9t2LNaOkXda85ZO7uxMvKUJOpjA3GgL-tt0wVJGleAwPVg8MmOEzDpgenpdMqBnHv_Z4A0gkncnTyhxmgwGhWOWFOgtyVzYYr2Z2OMHAISNDEQlj1epeJ4Y1SgVD4S8G-c_FquOiJImXkb2zeOf2jdfXp3CyVbqeb05gB7BsLya2SrCfKm1bkPnPGSy2DeRJm28yivgpnERGnMCT92N8vfUtJPXW5st9Ma5QtKaxyryoCYbc2PSC8pPcHUfnJPeMbsf6kQ7_U8a8ap1HPNUG8Fb-uq7Zy6U7enBsPkU_BZ0GbNB5AbERZdr5e8ynF9vqsEEvL5AkagttNM4eofRJIDADJHLcg-hGvjDQDdwAi0bTiwzn8n5kJQqqTlFpiEnopmIu3GxLfturJNk57WFDL5UBa1hiaKdqEkYtc=w1292-h969-no',
      width: 4,
      height: 3
    },
    {
      src: 'https://lh3.googleusercontent.com/fpw2-BL9ECbhcQk00rc8yt58bIZEZydoR2kmLTWcS-W5GsmQn8CUCMTV35eA3qCsOsxEVRvO2-xRK1PlLLHKrutu0fDG8rK07ERC4af1FNnZjeIF0WT6qN9pgD9TpqgY8qQfn8h4gSIE-mY-cWpPTGH5xydCr5DEWui7ZISGqVkGTuSjs1Xo4NK8MFzU77eiEvb4ZIg8OignXWCN3JTF_zZhneKHuHEuVtIdFC-kyVI_Tu38UZ9MDCh7h-Z5dqfg00ZmZjqdEGIoUzwKoxyTqeRUsqEMSR-14_gcWuYFQS0kdk0qv0xLEteBErler9ZTgBpymHxGHIr481lmRlLljz8QtyARCpDwT5asK8lW1BbwIwCP-bz69_YSUzY7qG37QDzfxh9Z-7JOAndtnXdcFBrwENRtjze4KLwudhlDaMLSgevDLI6uicZdwxtQE0Kislj6-n3xU6ifK5Msq21uW-S1HMRCxDUMomEDKyJ6WYOWZcNaOaErizrLpkDJMe8UwdmaaiOe6Pm8HPegO1T_w0Qvk5Dyjexc8_OF8jX_0c9Fu8IJR5DzI8WMPgpar1Eurpwc_0-mKw8FFZw9NfbqUSrjV84X-fzlCd5g7RYk9OtaiBlFmEQaGtzwBkRWjQnAk38D7SaxPQldMK0IdEVDIuQzGOv6Lg5yQzP9n0ayOEljSoObF3WhqOmlwnfXac52spFfYjlPYv9rLIOCJIsqtFyeVhAcgFwxNJzyGcR7QM8RpBOB=w1292-h969-no',
      width: 4,
      height: 3
    },
    {
      width: 4,
      height: 3,
      src: 'https://lh3.googleusercontent.com/EACYumdRIenDKdzDghT1b9xz1Uec9nmNsSZ-4t_Zot6GXG65PSR6FG2vZJx8UNJZwAqch0fmwdy8QIxjOozcj2bGbyPe4utI24rClTztuDrBGXQGBBWNt3H2KiNa-Js3OONRtaekizSWuqT-IVIpx50AVFPb5-e271v8-lfwk1ylFOX1KeTFtYbA6JqfKxhmQz3plnkv--9l71eDkOuS8C8ndB-zTX4Z7g4HRaacb_H5FUrusAoZSJYip5LTs9a333kY0N0SZE214wCpCbO-CRb5ThCsuMCC5aDAJ2yQVSpYsIt7fM1wZtS-x2l11kJVm6N-w1Je2_-cEqnUxp8Q8jDuqZ4RgZzeG08i7scZbvUkcT-ivs2mZ0GWXAnAX5WJ8OG08zMwH0F8gi4UuxPJeMPBlS3f1AqQQlRwhM8dePsJJEu-MYYN87lScgdATTW0i357q83l9XZ9-JLphmq4Xw4iRDbh6AZaA7hOxsxuD7CkaBBY997U5-9kXay3Q_fb_sDwJh6f4Fd-8NQuCuKsPv7ScyybID3GQYEuoWyk3ezSOQq1ANOIIAidbAIK3v6j6STajUISdY8CD1UXZpN5v9ZNQa1IwJkGCRjpKbYYgW_8Ufws4LCfl1qRrbz8BTX8vIz08Z3posaBjRdLiALxuqcLCSEfsrTJDoOi066vvntgqKFI2Zl9VJs=w1292-h969-no'
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
