import { combineReducers } from 'redux'

import dashBoardReducer from './reducers/dashboardReducer'
import callReducer from './reducers/callReducer'

export default combineReducers({
   dashboard: dashBoardReducer,
   call:callReducer


})

