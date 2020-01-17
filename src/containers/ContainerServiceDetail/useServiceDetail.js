import im1 from 'static/images/bba649u-960.jpg'
import useAxiosData from 'hooks/useAxiosData'
import { URL_SERVICE, SERVER_URL } from 'constants/serverURLs'

const useServiceDetail = ({ params }) => {
  const { slug } = params

  const { data } = useAxiosData({ url: URL_SERVICE, where: { slug }, single: true })

  const textBlock1 = {
    title: 'Интересный заголовок',
    img: im1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
  return {
    textBlock1,
    bannerData: {
      title: data?.title,
      img: SERVER_URL + data?.banner
    },
    content: {
      text: data?.text
    },
    videos: [{
      title: 'Обзор покрасочной камеры',
      text: 'Lorem ipsum sit dolar Lorem ipsum sit dolar Lorem ipsum sit dolar Lorem ipsum sit dolar',
      video: 'oCJIUBf01Z0'
    }]
  }
}

export default useServiceDetail
