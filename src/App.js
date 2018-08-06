import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'

class App extends Component {

  state={
    init:false
  }
  componentDidMount () {
    const script = document.createElement("script");
    
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDxMhKai2omF-2VhJWnO1VCaoz2n8fLMrs&v=3";
    script.async = true;
    
    document.body.appendChild(script);
    
    this.setState({init:true})

    if(this.init) {
      this.initMap()
    }
    
}

initMap = () => {
    const google = window.google;
    new google.maps.Map(document.getElementById('map'), {
      center: {lat:51.434571, lng: 21.316791},
      zoom: 13
    })        
}

        
test = () => {
    console.log(this.state.init)
    
    
}
  render() {
    return (
      <div  onLoad={this.test} className="App">
        <header className="App-header">
                
                <h1 className="App-title">TEST</h1>
            </header>
            <button onClick={this.test} value="">Click</button>
        <Main  
        />
      </div>
    );
  }
}

export default App;
