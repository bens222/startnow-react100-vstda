import React from 'react';

class NewTodo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.props.callbackFromParent(event);
  }

  handleAdd() {
    const todoArray = [];
    const newTodoId = this.state.id;
    this.setState({ id: newTodoId + 1 });
    const newToDoItem = this.props.newToDoItem;
    const priorityLevel = this.props.priorityLevel;
    todoArray.push(newTodoId, newToDoItem, priorityLevel);
    this.props.sendArray(todoArray);
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header'>Add New Todo</div>
        <div className='card-body'>
          <div className='card-text font-weight-bold'>I want to..</div>
          <div>
            <textarea
              name='newToDoItem'
              onChange={ this.handleChange }
              value={ this.props.newToDoItem }
            />
          </div>
          <div className='card-text font-weight-bold mt-2'>How much of a priority is this?</div>
          <div>
            <select name='priorityLevel' className='w-100' onChange={ this.handleChange } value={ this.props.priorityLevel }>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>
          </div>
        </div>
        <div className='card-footer'>
          <button type='button' className='btn btn-success w-100' onClick={ this.handleAdd }>Add</button>
        </div>
      </div>
    );
  }

}

export default NewTodo;
