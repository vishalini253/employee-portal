import { alertConstants } from '../_constants';
const initialState = {
  isValidEmail: true,
  isValidPassword: true,
}

export function validate(state = initialState, action) {
  switch (action.type) {
    case alertConstants.EMAIL:
      return {
        isValidEmail: false
      }
    case alertConstants.PASSWORD:
    return {
      isValidPassword: false
    }
    case alertConstants.CLEAREMAIL:
      return {
        isValidEmail: true
      }
    case alertConstants.CLEARPASSWORD:
      return {
        isValidPassword: true
      }
    default:
      return state
  }
}