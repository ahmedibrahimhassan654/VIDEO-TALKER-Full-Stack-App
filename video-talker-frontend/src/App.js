
import { useEffect } from 'react';
import './App.css';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';

function App()
{

  useEffect(() => {
   connectWithWebSocket()
  }, [])
  return (
    <div className="App">
      react app
    </div>
  );
}

export default App;
