import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallingDialoge from '../CallingDialoge/CallingDialoge';
import CallRejectedDialog from '../CallingRejectedSialoge/CallRejectedDialog';
import IncomingCallDialog from '../IncommingCallingDialoge/IncomingCallDialog';
import {callStates,setCallRejected} from '../../../store/actions/callActions'
const DirectCall = (props) => {
 const {
  localStream,
  remoteStream,
  callState,
  callingDialogeVisible,
  callerUsername,
  callRejected,
  hideCallRejectedDialog
 } = props;

  return (
    <>
      <LocalVideoView localStream={localStream} />
        {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
     
    {callRejected.rejected && <CallRejectedDialog
     reason={callRejected.reason}
     hideCallRejectedDialog={hideCallRejectedDialog}
    />}

        
        
        
        {
        callState === callStates.CALL_REQUESTED &&
         <IncomingCallDialog 
         callerUsername={callerUsername}
          />
          }
        
        {callingDialogeVisible && <CallingDialoge /> }
        
     
    </>
  );
};

function mapStoreStateToProps ({ call }) {
  return {
    ...call
  };
}
function mapDispatchToProps(dispatch) {
 return {
  hideCallRejectedDialog:(callRejectedDetails)=>dispatch(setCallRejected(callRejectedDetails))
 }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
