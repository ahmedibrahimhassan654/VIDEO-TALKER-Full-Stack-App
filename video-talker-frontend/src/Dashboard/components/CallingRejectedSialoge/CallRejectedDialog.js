import React ,{ useEffect }from 'react';

 import './callingrejectedDialoge.css';

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
 
   useEffect(() => {
    setTimeout(() => {
     hideCallRejectedDialog({
      rejected: false,
      reason: ''
     })
    },[4000])
   }, [hideCallRejectedDialog])
   return (
      <div className="call_rejected_dialog background_secondary_color ">
         <span>
           {reason}
         </span>
      </div>
   );
};

export default CallRejectedDialog
