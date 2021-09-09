import React, { Component } from 'react'; 
import { render } from 'react-dom';


 class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            results: ''
        }
        this.fetchDog = this.fetchDog.bind(this)
    }

    async fetchDog(){
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let json = await res.json()


        this.setState({ 
            loaded: true, 
            results: json.message
         })

    }

     render() {
         return (
             <div>
            <button onClick={() => this.fetchDog()}>
                   Change Picture Here
                   </button>
               <img src={this.state.results} className="photo" alt="dog"></img>
             </div>
         )
     }
     
    }

  


export default DogIndex; 
