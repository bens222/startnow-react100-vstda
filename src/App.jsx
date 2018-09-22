import React, { Component } from 'react';
import NewTodo from './NewTodo';
import ViewTodo from './ViewTodo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newToDoItem: '',
      priorityLevel: 'Low',
      todoArray: []
    };

    this.myCallback = this.myCallback.bind(this);
    this.handleArray = this.handleArray.bind(this);
  }

  myCallback(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleArray(array) {
    const todoArray = this.state.todoArray;
    todoArray.push(array);
    this.setState({ todoArray });
  }

  render() {
    return (
      <div className='container'>
        <div className='border-bottom border-white mb-4'>
          <h1 className='text-white pt-2'>Very Simple Todo App</h1>
          <h3 className='text-white pb-2'>Track all of your things!</h3>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <NewTodo
              callbackFromParent={ this.myCallback }
              newToDoItem={ this.state.newToDoItem }
              priorityLevel={ this.state.priorityLevel }
              sendArray={ this.handleArray }
            />
          </div>
          <div className='col-sm-8'>
            <ViewTodo
              todoArray={ this.state.todoArray }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
