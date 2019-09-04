import { alertConstants } from '../_constants'

function validateEmail (email) {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        return { type: alertConstants.CLEAREMAIL }
    }
    else {
    return { type: alertConstants.EMAIL }
    }
}

function validatePassword (password) {
   if (/^[a-zA-Z0-9]{4,100}$/.test(password)) {
    return { type: alertConstants.CLEARPASSWORD }
   }
   else {
    return { type: alertConstants.PASSWORD}
   }
}


export const validateActions = {
    validateEmail,
    validatePassword
}