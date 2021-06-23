import * as callActions from '../actions/callActions'

const initState = {
 localStram: null
}

const reducer = (state = initState, action) =>
{
  switch (action.type) {
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStram:action.localStram
      };
   
    default:
     return state
  }
}

export default reducer