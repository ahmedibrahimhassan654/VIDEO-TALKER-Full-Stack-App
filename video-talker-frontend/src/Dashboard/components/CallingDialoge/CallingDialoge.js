import React from 'react';
import {MdCallEnd} from 'react-icons/md'
import {hangUp} from '../../../utils/webRTC/webRTCHandler'
import './CallingDialoge.css';

const styles = {
   buttonContainer: {
      
   }
}

const CallingDialoge = () => {
   const handleHangUpButtonPressed = () => {
      hangUp()
   }
   return (
      <div className='direct_calling_dialog background_secondary_color' >
         <span>Calling</span>

         {/* <div style={styles.buttonContainer}> onClick={handleHangUpButtonPressed}>
            <MdCallEnd style={ {width:'20px',height:'20px',fill:'#e6e5e8'}}/>
         </div> */}
      </div>
   );
};

export default CallingDialoge
