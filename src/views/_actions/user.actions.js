import { history } from '../history'
import { credentials, dashBoardData } from '../../static'
import { userConstants } from '../_constants'

export function login(emailId, password) {
    if (emailId === credentials.username && password === credentials.password) {
        history.push({pathname: '/dashboard',
        state: {
            dashBoardData
        }})
        return { type: userConstants.LOGIN_SUCCESS, dashBoardData }
    } else {
        return { type: userConstants.LOGIN_FAILURE, error:'Username or Password incorrect'}
    }
}

export const userActions = {
    login,
    // logout,
}
