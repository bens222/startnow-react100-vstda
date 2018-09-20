import React, { Component } from 'react';
import NewTodo from './NewTodo';
import ViewTodo from './ViewTodo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newToDoItem: ''
    };

    this.myCallback = this.myCallback.bind(this);
  }

  myCallback(dataFromChild) {
    this.setState({ newToDoItem: dataFromChild });
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
              text={ this.state.newToDoItem }
            />
          </div>
          <div className='col-sm-8'>
            <ViewTodo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
