import React from 'react';

class NewTodo extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.callbackFromParent(event.target.value);
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header'>Add New Todo</div>
        <div className='card-body'>
          <div className='card-text font-weight-bold'>I want to..</div>
          <div>
            <textarea
              name='text'
              onChange={ this.handleChange }
              value={ this.props.text }
            />
          </div>
          <div className='card-text font-weight-bold mt-2'>How much of a priority is this?</div>
          <div>
            <select className='w-100'>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>
          </div>
        </div>
        <div className='card-footer'>
          <button type='button' className='btn btn-success w-100'>Add</button>
        </div>
      </div>
    );
  }

}

export default NewTodo;
