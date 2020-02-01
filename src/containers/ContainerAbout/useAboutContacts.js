import { useSelector } from 'react-redux'

const useAboutContacts = () => {
  const data = useSelector(state => state.contacts)
  return {
    ...data
  }
}

export default useAboutContacts
