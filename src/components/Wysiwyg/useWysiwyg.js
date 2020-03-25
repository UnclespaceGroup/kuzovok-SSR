import { SERVER_URL } from 'constants/serverURLs'
const pathTemplate = '__SERVER_PATH__'

const useWysiwyg = ({ children }) => {
  const text = typeof children === 'string' && children.replace(new RegExp(pathTemplate, 'g'), SERVER_URL)

  return { text }
}
export default useWysiwyg
