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

    
      
      this.initMap()
     
  }
    



      // document.querySelector('body').addEventListener('load', this.initMap())
    
       
    

 initMap = () => {
  const google = window.google || {};
  // google.maps = google.map || {};
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:51.434571, lng: 21.316791},
    zoom: 14
  })   
  let pawel =   {lat:51.434571, lng: 21.316791};
  let marker = new google.maps.Marker({
    position: pawel,
    map: this.map,
    title:'jjjjjjj'
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
            <div  onCompositionEnd={()=>this.initMap()} id="map"></div>
            <button onClick={this.test} >Click</button>
        
      </div>
    );
  }
}

export default App;
