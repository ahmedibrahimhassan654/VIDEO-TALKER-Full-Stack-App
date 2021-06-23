import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallingDialoge from '../CallingDialoge/CallingDialoge';
import CallRejectedDialog from '../CallingRejectedSialoge/CallRejectedDialog';
import IncomingCallDialog from '../IncommingCallingDialoge/IncommingCallingDialoge';

const DirectCall = (props) => {
  const { localStream, remoteStream } = props;

  return (
    <>
      <LocalVideoView localStream={localStream} />
        {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
     
      {/* <CallRejectedDialog />  */}
        {/* <IncomingCallDialog />   */}
        {/* <CallingDialoge />  */}
        
     
    </>
  );
};

function mapStoreStateToProps ({ call }) {
  return {
    ...call
  };
}

export default connect(mapStoreStateToProps, null)(DirectCall);
