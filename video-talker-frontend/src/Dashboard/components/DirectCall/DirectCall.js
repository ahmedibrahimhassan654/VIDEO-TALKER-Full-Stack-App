import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallingDialoge from '../CallingDialoge/CallingDialoge';
import CallRejectedDialog from '../CallingRejectedSialoge/CallRejectedDialog';
import IncomingCallDialog from '../IncommingCallingDialoge/IncomingCallDialog';
import ConversationButtons from '../ConversationButtons/ConversationButtons'
import {callStates,setCallRejected, setLocalCameraEnabled, setLocalMicrophoneEnabled} from '../../../store/actions/callActions'
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
        {remoteStream && callState===callStates.CALL_IN_PROGRESS && <RemoteVideoView remoteStream={remoteStream} />}
     
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
        
        {remoteStream && callState === callStates.CALL_IN_PROGRESS && <ConversationButtons {...props}/>}
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
    hideCallRejectedDialog: (callRejectedDetails) => dispatch(setCallRejected(callRejectedDetails)),
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
   setMicrophoneEnabled: (enabled) => dispatch(setLocalMicrophoneEnabled(enabled)),
 }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
