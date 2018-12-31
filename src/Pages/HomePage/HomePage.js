import React, { Component } from 'react';
import Perfil from '../../Components/Perfil'
import './Home.css';
class HomePage extends Component {
  constructor(){
    super()
    this.state={
      visible: true,
      perfiles_visibles: true,
      perfiles: [],
      error: null,
      isLoaded: false
    }
     

  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        
        this.setState({
          perfiles: data,
          isLoaded:true
        })
    })
  }
  
  ocultarComponente(){
    this.setState({
      visible: false
    })
  }
  ocultarPerfiles(){
    this.setState({
      perfiles_visibles:false
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState)
    return true;
    
  }
  render() {
    if(this.state.visible){
      if(!this.state.isLoaded){
        return (
          <div className="App">
            Loading ...
          </div>
        );
      }else{
        return (
          <div className="App">
            Home
            {
              this.state.perfiles.map(perfil=><Perfil data={perfil} perfiles_visibles={this.state.perfiles_visibles} />)
            }
            <button onClick={this.ocultarComponente.bind(this)}>Ocultar</button>
            <button onClick={this.ocultarPerfiles.bind(this)}>Ocultar Perfiles</button>
          </div>
        );
      }
      
      
      
    }else{
      return (
        <div className="App">
          Acceso restringido
        </div>
      );
    }
    
  }
}

export default HomePage;
