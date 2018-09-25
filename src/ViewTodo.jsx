import React from 'react';

class ViewTodo extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>View Todos</div>
        {
          this.props.listOfTodoItems.length === 0 ?
            <div className='card-body first-view'>
              <p className='card-text text-info mb-0'>Welcome to Very Simple Todo App!</p>
              <p className='card-text text-info'>Get started by adding a new todo on left.</p>
            </div>
          :
            <ul className='list-group'>
              {
                this.props.listOfTodoItems.map(newTodo => (
                  newTodo[2] === '1' ?
                    <li key={ newTodo[0] } className='list-group-item list-group-item-success'>
                      <input type='checkbox' />
                      { newTodo[1] }
                      <i className='fa fa-edit' />
                    </li>
                  :
                  newTodo[2] === '2' ?
                    <li key={ newTodo[0] } className='list-group-item list-group-item-warning'>
                      <input type='checkbox' />
                      { newTodo[1] }
                    </li>
                  :
                    <li key={ newTodo[0] } className='list-group-item list-group-item-danger'>
                      <input type='checkbox' />
                      { newTodo[1] }
                    </li>
                ))
              }
            </ul>
        }
      </div>
    );
  }
}

export default ViewTodo;
