import im1 from 'static/images/lada-vaz-lada-vaz-mashina-avto-2103.jpg'

const useAbout = () => {
  const block1 = {
    title: 'Кузовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    img: im1
  }
  const block2 = {
    title: 'Кузовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    img: im1
  }
  return {
    block1,
    block2,
    bannerData: {
      title: 'Контактная информация',
      img: im1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
    }
  }
}

export default useAbout
