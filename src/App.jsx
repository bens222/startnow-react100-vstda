import React, { Component } from 'react';
import NewTodo from './NewTodo';
import ViewTodo from './ViewTodo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newToDoItem: '',
      priorityLevel: '1',
      listOfTodoItems: []
    };

    this.myCallback = this.myCallback.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  myCallback(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleArray(todoItem) {
    const listOfTodoItems = this.state.listOfTodoItems;
    listOfTodoItems.push(todoItem);
    this.setState({ listOfTodoItems, newToDoItem: '' });
  }

  updateTodo(todoId, updateTodoItem, priorityLevel) {
    const listOfTodoItems = [...this.state.listOfTodoItems];
    const updatedTodo = [todoId, updateTodoItem, priorityLevel];
    const spliceIndex = listOfTodoItems.map(todoItem => todoItem[0]).indexOf(todoId);
    listOfTodoItems.splice(spliceIndex, 1, updatedTodo);
    this.setState({ listOfTodoItems });
  }

  deleteTodo(todoId) {
    const listOfTodoItems = [...this.state.listOfTodoItems];
    const spliceIndex = listOfTodoItems.map(todoItem => todoItem[0]).indexOf(todoId);
    listOfTodoItems.splice(spliceIndex, 1);
    this.setState({ listOfTodoItems });
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
              listOfTodoItems={ this.state.listOfTodoItems }
              callbackFromParentEdit={ this.updateTodo }
              callbackFromParentDelete={ this.deleteTodo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
