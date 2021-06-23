import React from 'react';

import './IncommingCallingDialoge.css';

const IncommingCallingDialoge = () => {
   return (
      <div className="direct_call_dialog background_secondary_color">
         <span className="direct_call_dialog_caller_name">
            Caller
         </span>

         <div className="direct_call_dialog_button_container">

            <button className="direct_call_dialog_accept_button">
               Accept
            </button>
            <button className="direct_call_dialog_reject_button">
               Reject
            </button>
         </div>
        
      </div>
   )
}

export default IncommingCallingDialoge
