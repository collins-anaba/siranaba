import React,  {Component} from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import routes from './routes';

export default class App extends Component {
  render() {
return(
  <HashRouter>
  <div>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {Admin}
    {routes}
  </div>
  </HashRouter>
)
  }
  
}

