import store from '../../store/store'
import {setLocalStream} from '../../store/actions/callActions'
const defaultConstrains = {
   video: true,
   audio: true,
}

export const getlocalStream = () => {
   navigator.mediaDevices.getUserMedia(defaultConstrains)
      .then(stream => {
      store.dispatch(setLocalStream(stream))
      })
      .catch(error => {
         console.log('error happen when trying to access local stream');
         console.log(error);
   })
}