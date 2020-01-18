import { SERVER_URL } from 'constants/serverURLs'

export const getImagePath = (path) => {
  if (path) {
    return SERVER_URL + path
  }
}
