import { combineReducers } from 'redux'

import dashBoardReducer from './reducers/dashboardReducer'


export default combineReducers({
  dashboard:dashBoardReducer
})

