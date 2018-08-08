import React, { Component } from 'react'


class Weather extends Component {

    render () {
        const { temp, icon} = this.props
        return (
            
            <div className="weather">
            <div>{temp} &#176;C</div>
            {icon?<img src={icon} alt="weather`s icon" />:<span>...</span>}
            <p>Powered by Openweathermap.org</p>
            </div>
        )
    }

}

export default Weather