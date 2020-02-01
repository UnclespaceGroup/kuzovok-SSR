
export default function ContactsReducer (state = {}, action = {}) {
  switch (action.type) {
    case 'addContacts':
      return {
        ...action.payload
      }

    default:
      return state
  }
}
