import React, { Component } from 'react'
import * as Map from './Map'

class Main extends Component {
    state ={
     
    }
    
    

    render () {
         const { start, init } = this.props
        
        return (
            <div>
                <div   id="map"></div>
                
                
            </div>
            
        )
    }
}

export default Main