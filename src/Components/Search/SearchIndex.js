import React from 'react';
import {Input} from 'reactstrap';
import { Component } from 'react';
import { render } from 'react-dom';
 
class SearchIndex extends Component {
  constructor(props) {
    super(props)
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     search: []
   }
  }
 
    onInputChange = (value) => {
      let results = this.state.things.filter((thing) => thing.includes(value.toLowerCase()))
      this.setState({search: results})
    }

    display(item, id) {
      return <p key={id}>{item}</p>
    }

render() {

 return ( 
     <div>
       <Input 
       type="text" 
       placeholder='Search Here' 
       //value={this.state.search}
       onChange={(e) => this.onInputChange(e.target.value)}
       />
       <h3>Results:</h3>
        {this.state.search && this.state.search.length > 0 
        ? this.state.search.map(this.display)
        : this.state.things.map(this.display)} 
     </div>
 )}
}
 
export default SearchIndex;
