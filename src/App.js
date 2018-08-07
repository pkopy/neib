import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'
import * as Map from './Map'

class App extends Component {

  state={
    init:false,
    map:null
  }
  
  componentDidMount () {

    
      
      const script = document.createElement("script");

      script.id = 'test'
      
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDxMhKai2omF-2VhJWnO1VCaoz2n8fLMrs&v=3";
      script.async = true;
      
      document.body.appendChild(script);

      setTimeout(this.initMap, 300)
     
  }
    



      // document.querySelector('body').addEventListener('load', this.initMap())
    
       
    

 initMap = () => {
  const google = window.google || {};
  // google.maps = google.map || {};
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:51.434571, lng: 21.316791},
    zoom: 14
  })        
}

        
test = () => {
    console.log(this.state.map)
    
    
}
  render() {
    return (
      <div  className="App">
        <header className="App-header">
                
                <h1 className="App-title">TEST</h1>
            </header>
            <button onClick={this.test} >Click</button>
        <Main  init={this.initMap}
        />
      </div>
    );
  }
}

export default App;
