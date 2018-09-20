import React from 'react';

class ViewTodo extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>View Todos</div>
        <div className='card-body first-view'>
          <p className='card-text text-info mb-0'>Welcome to Very Simple Todo App!</p>
          <p className='card-text text-info'>Get started by adding a new todo on left.</p>
        </div>
      </div>
    );
  }
}

export default ViewTodo;
