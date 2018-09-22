import React from 'react';

class ViewTodo extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>View Todos</div>
        {
          this.props.todoArray.length === 0 ?
            <div className='card-body first-view'>
              <p className='card-text text-info mb-0'>Welcome to Very Simple Todo App!</p>
              <p className='card-text text-info'>Get started by adding a new todo on left.</p>
            </div>
          :
            <ul className='list-group'>
              {this.props.todoArray.map(newTodoItem => (
                <li key={ newTodoItem[0] } className='list-group-item'>{ newTodoItem[1] }</li>
              ))}
            </ul>
        }
      </div>
    );
  }
}

export default ViewTodo;
