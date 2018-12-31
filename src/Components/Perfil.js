import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Perfil extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
      if(this.props.perfiles_visibles){
        return (
            <div className="App">
                <div>{this.props.data.name}</div>
                <div>{this.props.data.email}</div>
                <img src="../img/images.jpg"  />
                <button><Link to={"/perfil/"+this.props.data.id}>Ver Perfil</Link></button>
            </div>
        );
       }else{
            return (
                <div className="App">
                    No visibles
                </div>
            );
       }
  }
}

export default Perfil;