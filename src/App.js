import React, { Component } from 'react';
import './App.css';
import Weather from './Weather'


class App extends Component {

  state={
    init:false,
    markers:[],
    map:'',
    temp:'',
    icon:'',
    content:'',
    locations: [
      {title:'Radomska 60', location: {lat:51.432822, lng:21.320922}, direction:'Radom'},
      {title:'Radomska 69', location: {lat:51.432921, lng:21.318971}, direction:'Jedlnia-Letnisko'},
      {title:'Siczki', location: {lat:51.437613, lng:21.30547}, direction:'Radom'},
      {title:'Radomska 32', location: {lat:51.432071, lng:21.326588}, direction:'Radom'},
      {title:'Piłsudski Square', location: {lat:51.430069, lng:21.327622}, direction:'Radom'},
      {title:'Pawel`s home', location: {lat:51.434571, lng: 21.316791}},
      {title:'Monument to the victims of the Nazi occupation', location: {lat:51.430406, lng: 21.32743}},

    ]
  }
  
  componentDidMount () {
    let token = localStorage.token

    if (!token)
      token = localStorage.token = Math.random().toString(36).substr(-8)
    fetch('http://api.openweathermap.org/data/2.5/weather?q=jedlnia-letnisko,pl&units=metric&appid=8fc1f63fcefa3c2d6d57a54a6400073e').then((res) => res.json())
      .then((data)=>this.setState({temp:data.main.temp, icon:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}))
      .catch(() => this.setState({temp: '-', icon:''}))
      fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=Jedlnia-Letnisko&prop=info|description&format=json&formatversion=2&inprop=url&descprefersource=local')
      .then((res) => res.json())
      .then((data) => {this.setState({content:data.query.pages[0].title})
          // let reg = /population_total = \d*/;
          // let myArray = reg.exec(data.query.pages[0].revisions[0].content)
          // let reg1 = /\d+/
          // this.setState({content:(reg1.exec(myArray[0]))[0]})
          // console.log(reg1.exec(myArray[0]))
          console.log(data.query.pages[0].title)
      })
      // fetch('https://newsapi.org/v2/top-headlines?country=pl&apiKey=ac6d8147786d47dfa539427ea3f24b65')
      //   .then((res) => res.json())
      //   .then((data) => console.log(data))
      this.initMap()

      // fetch('https://andruxnet-world-cities-v1.p.mashape.com/?query=rad&searchby=city', {
      //   headers: {
      //     "X-Mashape-Key": "4zypBgqWUjmshNaRKAdqNSAjch6xp1w9HCLjsnNZNalp6qAzJ2",
      //     "Accept": "application/json"
      //   }
      // }
      // ).then((res) => res.json())
      // .then((data) => console.log(data))
      // .catch(() => console.log('no data'))
     
  }
    



      // document.querySelector('body').addEventListener('load', this.initMap())
    
       
    

 initMap = () => {
  //  let markers = this.state.markers
  const google = window.google || {};
  // google.maps = google.map || {};
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:51.434571, lng: 21.316791},
    zoom: 14
  })   
  this.setState({map:this.map})
  // let pawel =   {lat:51.434571, lng: 21.316791};
  for(let location of this.state.locations){
    console.log(location)
    let marker = new google.maps.Marker({
      position: location.location,
      map: this.map,
      
      animation: google.maps.Animation.DROP,
      title:location.title,
      
    }) 
    this.state.markers.push(marker)

  }
  
  for(let marker of this.state.markers) {
    marker.setMap(this.state.map)
      marker.addListener('click', () => {
        this.showListing(marker)
      })
  }
  // let infoWindow = new google.maps.InfoWindow({
  //   content: "Tralala ldsasjfsa"
  // }) 
  console.log(this.state.markers) 
}

showListing = (marker) => {
  if(marker.map !== null){
    marker.setMap(null)
    // console.log(marker.map)
  }else{
    marker.setMap(this.state.map)
  }
}
        
test = () => {
   for(let marker of this.state.markers){
     this.showListing(marker)

   } 
  // console.log(this.state.markers[0])
    
    
}
  render() {
    const { temp, icon } = this.state
    return (
      <div  className="App">
        <header className="App-header">    
          <h1 className="App-title">MY NEIGHBORHOOD</h1>
        </header>
            <div id="map"></div>
            <Weather 
              icon={icon}
              temp={temp}
            />
            <button onClick={this.test} >Click</button>
        
      </div>
    );
  }
}

export default App;
