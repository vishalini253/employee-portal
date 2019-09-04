import { userConstants } from '../_constants'
const initialState = {
    isLoginSuccess: true,
    dashBoardData: {},
    error: '',
  }

export function authentication(state = initialState, action) {
    switch(action.type) {
    case userConstants.LOGIN_SUCCESS:
        return {
            isLoginSuccess: true,
            dashBoardData: action.dashBoardData
        }
    case userConstants.LOGIN_FAILURE:
        return {
            isLoginSuccess: false,
            error: action.error
        }
    default:
        return state
    }
}
