import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'
import * as Map from './Map'

class App extends Component {

  state={
    init:false,
    map:null,
    temp:0,
    icon:'',
    content:''
  }
  
  componentDidMount () {
    let token = localStorage.token

    if (!token)
      token = localStorage.token = Math.random().toString(36).substr(-8)
    fetch('http://api.openweathermap.org/data/2.5/weather?q=jedlnia-letnisko,pl&units=metric&appid=8fc1f63fcefa3c2d6d57a54a6400073e').then((res) => res.json())
      .then((data)=>this.setState({temp:data.main.temp, icon:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}))
      fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=Jedlnia-Letnisko&prop=revisions&rvprop=content&format=json&formatversion=2')
      .then((res) => res.json())
      .then((data) => {
          let reg = /population_total = \d*/;
          let myArray = reg.exec(data.query.pages[0].revisions[0].content)
          let reg1 = /\d+/
          this.setState({content:(reg1.exec(myArray[0]))[0]})
          // console.log(reg1.exec(myArray[0]))
      })
      fetch('https://newsapi.org/v2/top-headlines?country=pl&apiKey=ac6d8147786d47dfa539427ea3f24b65')
        .then((res) => res.json())
        .then((data) => console.log(data))
      this.initMap()

      fetch('https://andruxnet-world-cities-v1.p.mashape.com/?query=xx&searchby=city', {
        headers: {
          "X-Mashape-Key": "4zypBgqWUjmshNaRKAdqNSAjch6xp1w9HCLjsnNZNalp6qAzJ2",
          "Accept": "application/json"
        }
      }
      ).then((res) => res.json())
      .then((data) => console.log(data))
      .catch(() => console.log('no data'))
     
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
    title:'Jedlnia-Letnisko'
  })   
}

        
test = () => {
    console.log(this.state.content)
    
    
}
  render() {
    return (
      <div  className="App">
        <header className="App-header">    
          <h1 className="App-title">MY NEIGHBORHOOD</h1>
        </header>
            <div id="map"></div>
            <div className="weather">
            <div>{this.state.temp} &#176;C</div>
            <img src={this.state.icon} alt="weather`s icon" />
            <p>Powered by Openweathermap.org</p>
            </div>
            <button onClick={this.test} >Click</button>
        
      </div>
    );
  }
}

export default App;
