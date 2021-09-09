import React, { Component } from 'react';
 
class CatList extends Component { 
  render() {
    return ( 
      <ul> {this.props.breeds.map((cat) => <li>{cat}</li>)}
      </ul>
    )
  }
}

export default CatList 
