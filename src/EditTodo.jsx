import React from 'react';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoId: this.props.todoItem[0],
      updateToDoItem: this.props.todoItem[1],
      priorityLevel: this.props.todoItem[2],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEdit() {
    this.props.callbackFromParent(
        this.state.todoId,
        this.state.updateToDoItem,
        this.state.priorityLevel,
    );
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header'>Edit Todo</div>
        <div className='card-body'>
          <div className='card-text font-weight-bold'>Description</div>
          <div>
            <textarea
              name='updateToDoItem'
              className='update-todo-text'
              onChange={ this.handleChange }
            />
          </div>
          <div className='card-text font-weight-bold mt-2'>Priority</div>
          <div>
            <select name='priorityLevel' className='update-todo-priority w-100' onChange={ this.handleChange } value={ this.state.priorityLevel }>
              <option value='1'>Low</option>
              <option value='2'>Medium</option>
              <option value='3'>High</option>
            </select>
          </div>
        </div>
        <div className='card-footer'>
          <button type='button' className='update-todo btn btn-success' onClick={ this.handleEdit }>Confirm Edit</button>
        </div>
      </div>
    );
  }
}

export default EditTodo;
