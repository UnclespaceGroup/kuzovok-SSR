import React from 'react'
import css from './ContainerHome.module.scss'
import ContainerBannerWithVideoDesktop from '../ContainerBannerWithVideo/ContainerBannerWithVideoDesktop'
import Padding from '../../components/Padding/Padding'
import SectionMainChooseAutoTypeDesktop
  from '../../components/SectionMainChooseAutoType/SectionMainChooseAutoTypeDesktop'
import SectionMainServiceCatalogDesktop
  from '../../components/SectionMainServiceCatalog/SectionMainServiceCatalogDesktop'
import SectionCardsRow from '../../components/SectionCardsRow/SectionCardsRow'
import SectionContacts from '../../components/SectionContacts/SectionContacts'
// import Section2GIS from '../../components/Section2GIS/Section2GIS'

const last = {
  title: 'Последние работы',
  items: [
    {
      title: 'Митсубиши Лансер',
      subtitle: 'Покраска',
      date: '25 августа 2019',
      id: 1,
      text: 'Была в ужасном состоянии, удалось многое восстановить',
      img: 'https://lh3.googleusercontent.com/EACYumdRIenDKdzDghT1b9xz1Uec9nmNsSZ-4t_Zot6GXG65PSR6FG2vZJx8UNJZwAqch0fmwdy8QIxjOozcj2bGbyPe4utI24rClTztuDrBGXQGBBWNt3H2KiNa-Js3OONRtaekizSWuqT-IVIpx50AVFPb5-e271v8-lfwk1ylFOX1KeTFtYbA6JqfKxhmQz3plnkv--9l71eDkOuS8C8ndB-zTX4Z7g4HRaacb_H5FUrusAoZSJYip5LTs9a333kY0N0SZE214wCpCbO-CRb5ThCsuMCC5aDAJ2yQVSpYsIt7fM1wZtS-x2l11kJVm6N-w1Je2_-cEqnUxp8Q8jDuqZ4RgZzeG08i7scZbvUkcT-ivs2mZ0GWXAnAX5WJ8OG08zMwH0F8gi4UuxPJeMPBlS3f1AqQQlRwhM8dePsJJEu-MYYN87lScgdATTW0i357q83l9XZ9-JLphmq4Xw4iRDbh6AZaA7hOxsxuD7CkaBBY997U5-9kXay3Q_fb_sDwJh6f4Fd-8NQuCuKsPv7ScyybID3GQYEuoWyk3ezSOQq1ANOIIAidbAIK3v6j6STajUISdY8CD1UXZpN5v9ZNQa1IwJkGCRjpKbYYgW_8Ufws4LCfl1qRrbz8BTX8vIz08Z3posaBjRdLiALxuqcLCSEfsrTJDoOi066vvntgqKFI2Zl9VJs=w1292-h969-no'
    },
    {
      title: 'Митсубиши Лансер',
      subtitle: 'Покраска',
      date: '25 августа 2019',
      id: 1,
      text: 'Была в ужасном состоянии, удалось многое восстановить',
      img: 'https://lh3.googleusercontent.com/EACYumdRIenDKdzDghT1b9xz1Uec9nmNsSZ-4t_Zot6GXG65PSR6FG2vZJx8UNJZwAqch0fmwdy8QIxjOozcj2bGbyPe4utI24rClTztuDrBGXQGBBWNt3H2KiNa-Js3OONRtaekizSWuqT-IVIpx50AVFPb5-e271v8-lfwk1ylFOX1KeTFtYbA6JqfKxhmQz3plnkv--9l71eDkOuS8C8ndB-zTX4Z7g4HRaacb_H5FUrusAoZSJYip5LTs9a333kY0N0SZE214wCpCbO-CRb5ThCsuMCC5aDAJ2yQVSpYsIt7fM1wZtS-x2l11kJVm6N-w1Je2_-cEqnUxp8Q8jDuqZ4RgZzeG08i7scZbvUkcT-ivs2mZ0GWXAnAX5WJ8OG08zMwH0F8gi4UuxPJeMPBlS3f1AqQQlRwhM8dePsJJEu-MYYN87lScgdATTW0i357q83l9XZ9-JLphmq4Xw4iRDbh6AZaA7hOxsxuD7CkaBBY997U5-9kXay3Q_fb_sDwJh6f4Fd-8NQuCuKsPv7ScyybID3GQYEuoWyk3ezSOQq1ANOIIAidbAIK3v6j6STajUISdY8CD1UXZpN5v9ZNQa1IwJkGCRjpKbYYgW_8Ufws4LCfl1qRrbz8BTX8vIz08Z3posaBjRdLiALxuqcLCSEfsrTJDoOi066vvntgqKFI2Zl9VJs=w1292-h969-no'
    },
    {
      title: 'Митсубиши Лансер',
      subtitle: 'Покраска',
      date: '25 августа 2019',
      id: 1,
      text: 'Была в ужасном состоянии, удалось многое восстановить',
      img: 'https://lh3.googleusercontent.com/EACYumdRIenDKdzDghT1b9xz1Uec9nmNsSZ-4t_Zot6GXG65PSR6FG2vZJx8UNJZwAqch0fmwdy8QIxjOozcj2bGbyPe4utI24rClTztuDrBGXQGBBWNt3H2KiNa-Js3OONRtaekizSWuqT-IVIpx50AVFPb5-e271v8-lfwk1ylFOX1KeTFtYbA6JqfKxhmQz3plnkv--9l71eDkOuS8C8ndB-zTX4Z7g4HRaacb_H5FUrusAoZSJYip5LTs9a333kY0N0SZE214wCpCbO-CRb5ThCsuMCC5aDAJ2yQVSpYsIt7fM1wZtS-x2l11kJVm6N-w1Je2_-cEqnUxp8Q8jDuqZ4RgZzeG08i7scZbvUkcT-ivs2mZ0GWXAnAX5WJ8OG08zMwH0F8gi4UuxPJeMPBlS3f1AqQQlRwhM8dePsJJEu-MYYN87lScgdATTW0i357q83l9XZ9-JLphmq4Xw4iRDbh6AZaA7hOxsxuD7CkaBBY997U5-9kXay3Q_fb_sDwJh6f4Fd-8NQuCuKsPv7ScyybID3GQYEuoWyk3ezSOQq1ANOIIAidbAIK3v6j6STajUISdY8CD1UXZpN5v9ZNQa1IwJkGCRjpKbYYgW_8Ufws4LCfl1qRrbz8BTX8vIz08Z3posaBjRdLiALxuqcLCSEfsrTJDoOi066vvntgqKFI2Zl9VJs=w1292-h969-no'
    }
  ]
}

const ContainerHome = () => (
  <div className={css.container}>
    <ContainerBannerWithVideoDesktop />
    <Padding value={80} />
    <SectionMainChooseAutoTypeDesktop />
    <Padding value={80} />
    <SectionMainServiceCatalogDesktop />
    <Padding value={80} />
    <SectionCardsRow {...last} />
    <Padding value={80} />
    <SectionContacts />
    <Padding value={120} />
  </div>
)

export default React.memo(ContainerHome)
