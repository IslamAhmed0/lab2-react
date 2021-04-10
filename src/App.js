import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';

import {Route} from 'react-router-dom';
import Home from "./Home/Home";
import PrivetRoute from "./Routes/PrivetRoute";
function App() {
  return (
    <div className="container">
        <Route path="/login" component={Login}/>
        <PrivetRoute path="/home" component={Home}/>
      <Login/>

    </div>
  );
}

export default App;
