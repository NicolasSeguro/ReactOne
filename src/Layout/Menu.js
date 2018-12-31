import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="App">
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;