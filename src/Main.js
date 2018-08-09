import React, { Component } from 'react'
import * as Map from './Map'

class Main extends Component {
    state ={
     
    }
    
    show =(mark) => {
        this.props.changeTitle(mark, 'TeSTTTTTTTTTTTT')
        // console.log(mark.id)
        // for(let marker of this.props.markers){
        //     if(mark.id === marker.id){
        //         marker.title = true;
        //         this.setState
        //     }
        // }
    }

    render () {
         const { markers } = this.props
        
        return (
            <div>
                <ol style={{position: 'absolute'}}>
                    {markers.map((marker) =>
                        <li key={marker.id} id={`marker:${marker.id}`}>
                            <div onMouseOver={() => this.props.changeTitle(marker)} onMouseOut={()=>this.props.defaultIcon(marker)}>
                                {marker.title}
                            </div>

                        </li> 
                    )}
                </ol>
            </div>
            
        )
    }
}

export default Main