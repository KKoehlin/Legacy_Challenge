import React from 'react';
import { Form } from 'reactstrap';
import { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
      super(props)
     this.state = {
       value:[],
       tasks: ''
     }

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.completed = this.completed.bind(this);
     this.display = this.display.bind(this);
     }

     display(todo, id) {
        return (
         <>
         <p key={id}>{todo}</p>
         <button onClick={() => this.completed({id})}>Delete</button> 
         </>
         )
     }

     completed({id}) { 
        const completedItem = this.state.value
        completedItem.splice(id, 1)
        this.setState({
            value: completedItem
        })
     }
      
     handleChange(event) {
         this.setState({tasks: event.target.value})
     }

     handleSubmit(event) {
         event.preventDefault()

         if (this.state.tasks !== '') {
             this.setState({tasks: '', value:[...this.state.value, this.state.tasks]})
         }
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <label>
                    To Do: 
                    <input type="text" value={this.state.tasks} onChange={this.handleChange}/>
                </label>
            </Form>
                   <h3>To Do List:</h3>
                   {this.state.value.map(this.display)} 
                   </div>
        )
    }
}

export default ToDoList;