import React, {Component} from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';  

class App extends Component {
  render() {
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}

export default App;
