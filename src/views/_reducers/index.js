import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { validate } from './validate.reducer'

const rootReducer = combineReducers({
  authentication,
  validate
})

export default rootReducer
