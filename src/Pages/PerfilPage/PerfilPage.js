import React, { Component } from 'react';

class PerfilPage extends Component {
  constructor(props){
    super(props)
    console.log(this.props);

  }
  
  render() {
    
      return (
        <div className="App">
          Perfil personal{this.props.match.params.id}
        </div>
      );
   }
    
  
}

export default PerfilPage;
