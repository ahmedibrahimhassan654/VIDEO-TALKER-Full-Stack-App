import * as callActions from '../actions/callActions'

const initState = {
   localStream: null,
   callState: callActions.callStates.CALL_UNAVAILABLE,
   callingDialogeVisible: false,
   callerUsername:''
   
}

const reducer = (state = initState, action) =>
{
   switch (action.type) {
     
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream:action.localStream
        };
    case callActions.CALL_SET_CALL_STATE:
      return {
           ...state,
           callState:action.callState
         };
      case callActions.CALL_SET_CALLING_DIALOGE_VISIBLE:
            return {
               ...state,
               callingDialogeVisible:action.visible
         };
      case callActions.CALL_SET_CALLER_USERNAME:
            return {
               ...state,
               callerUsername:action.callerUsername
               };
   
    default:
     return state
  }
}

export default reducer