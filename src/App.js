import React, { Component } from 'react';
import './App.css';
import Home from './Pages/HomePage/HomePage'
import Menu from './Layout/Menu'

class App extends Component {
  render() {
    let opciones = ['Home','Registro','Login']
    let visible = true;
    return (
      <div className="App">
        <Menu navOption={opciones} visible={visible} />
        <Home />
      </div>
    );
  }
}

export default App;
