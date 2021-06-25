import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallingDialoge from '../CallingDialoge/CallingDialoge';
import CallRejectedDialog from '../CallingRejectedSialoge/CallRejectedDialog';
import IncomingCallDialog from '../IncommingCallingDialoge/IncomingCallDialog';
import {callStates} from '../../../store/actions/callActions'
const DirectCall = (props) => {
  const { localStream, remoteStream ,callState,callingDialogeVisible,callerUsername} = props;

  return (
    <>
      <LocalVideoView localStream={localStream} />
        {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
     
        {/* {   <CallRejectedDialog /> } */}
        
        
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

export default connect(mapStoreStateToProps, null)(DirectCall);
