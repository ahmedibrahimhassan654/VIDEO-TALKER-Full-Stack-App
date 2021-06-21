
import { useEffect } from 'react';
import './App.css';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
function App()
{

  useEffect(() => {
   connectWithWebSocket()
  }, [])


  return (
    <Router>
      <Switch>
        <Route path='/dashboard' >
          <Dashboard/>
        </Route>
         <Route path='/' >
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
