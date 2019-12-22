import photo from 'static/images/Pokraska-3.jpg'
import carIcon from 'static/images/car-icon.png'

const useWorks = () => {
  const header = {
    icon: carIcon,
    title: 'Все работы станции',
    text: '',
    img: photo
  }

  return {
    header
  }
}

export default useWorks
