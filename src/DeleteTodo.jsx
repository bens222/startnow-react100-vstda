import React from 'react';

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteId: this.props.todoItem[0]
    };

    this.deleteTodoItem = this.deleteTodoItem.bind(this);
  }

  deleteTodoItem() {
    this.props.callbackFromParent(this.state.deleteId);
  }

  render() {
    return (
        null
    );
  }
}

export default DeleteTodo;
