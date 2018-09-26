import React from 'react';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

class ViewTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editClicked: false
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.setState({ editClicked: true });
  }

  updateTodo(todoId, updateTodoItem, priorityLevel) {
    this.setState({ editClicked: false });
    this.props.callbackFromParentEdit(todoId, updateTodoItem, priorityLevel);
  }

  handleDelete(todoId) {
    this.props.callbackFromParentDelete(todoId);
  }

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
                this.props.listOfTodoItems.map((newTodo, index) => (
                  newTodo[2] === '1' ?
                    <li key={ newTodo[0] } className='list-group-item list-group-item-success'>
                      <input type='checkbox' />
                      { newTodo[1] }
                      <button className='icon delete-todo' onClick={ this.handleDelete }>
                        <i className='fa fa-ban' />
                      </button>
                      {
                        <DeleteTodo
                          todoItem={ this.props.listOfTodoItems[index] }
                          callbackFromParent={ this.handleDelete }
                        />
                      }
                      <button className='icon edit-todo' onClick={ this.handleEdit }>
                        <i className='fa fa-edit' />
                      </button>
                      {
                        this.state.editClicked === true ?
                          <EditTodo
                            todoItem={ this.props.listOfTodoItems[index] }
                            editClicked={ this.state.editClicked }
                            callbackFromParent={ this.updateTodo }
                          />
                        :
                        null
                      }
                    </li>
                  :
                  newTodo[2] === '2' ?
                    <li key={ newTodo[0] } className='list-group-item list-group-item-warning'>
                      <input type='checkbox' />
                      { newTodo[1] }
                      <button className='icon delete-todo' onClick={ this.handleDelete }>
                        <i className='fa fa-ban' />
                      </button>
                      {
                        <DeleteTodo
                          todoItem={ this.props.listOfTodoItems[index] }
                          callbackFromParent={ this.handleDelete }
                        />
                      }
                      <button className='icon edit-todo' onClick={ this.handleEdit }>
                        <i className='fa fa-edit' />
                      </button>
                      {
                        this.state.editClicked === true ?
                          <EditTodo
                            todoItem={ this.props.listOfTodoItems[index] }
                            editClicked={ this.state.editClicked }
                            callbackFromParent={ this.updateTodo }
                          />
                        :
                        null
                      }
                    </li>
                  :
                    <li key={ newTodo[0] } className='list-group-item list-group-item-danger'>
                      <input type='checkbox' />
                      { newTodo[1] }
                      <button className='icon delete-todo' onClick={ this.handleDelete }>
                        <i className='fa fa-ban' />
                      </button>
                      {
                        <DeleteTodo
                          todoItem={ this.props.listOfTodoItems[index] }
                          callbackFromParent={ this.handleDelete }
                        />
                      }
                      <button className='icon edit-todo' onClick={ this.handleEdit }>
                        <i className='fa fa-edit' />
                      </button>
                      {
                        this.state.editClicked === true ?
                          <EditTodo
                            todoItem={ this.props.listOfTodoItems[index] }
                            editClicked={ this.state.editClicked }
                            callbackFromParent={ this.updateTodo }
                          />
                        :
                        null
                      }
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
