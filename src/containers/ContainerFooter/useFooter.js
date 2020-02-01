import { useSelector } from 'react-redux'

const useFooter = () => {
  const { address, phone } = useSelector(state => state.contacts)
  return {
    phone,
    address
  }
}
export default useFooter
