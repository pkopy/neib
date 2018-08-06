import React, { Component } from 'react'
import * as Map from './Map'

class Main extends Component {
    state ={
     
    }
    
    

    render () {
         const { start, init } = this.props
        
        return (
            <div>
                <div   id="map" onClick={()=>init()}></div>
                
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxMhKai2omF-2VhJWnO1VCaoz2n8fLMrs&v=3&callback=initMap">
                </script>
            </div>
            
        )
    }
}

export default Main