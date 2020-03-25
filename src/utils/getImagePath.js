import { SERVER_URL } from 'constants/serverURLs'

export const getImagePath = (path) => {
  if (path) {
    return path.replace('__SERVER_PATH__', SERVER_URL)
  }
}
