import React, { Component } from 'react';
import { connect } from 'react-redux';

import postTodo from '../actions/postTodoAction';

class NewTodo extends Component {
  state = {
    text: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.postTodo(this.state.text, this.props.auth);
  };
  render() {
    return (
      <div>
        <h2 className="mb-3 mt-3">
          Have any pending tasks to do ? Create a new todo !
        </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="todoText"
              name="text"
              placeholder="What is pending ?"
              onChange={this.onChange}
              value={this.state.text}
            />
          </div>
          <input
            type="submit"
            value="Create New Todo"
            className="btn btn-block btn-secondary"
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.currentUser.user['x-auth']
  };
}
export default connect(
  mapStateToProps,
  {
    postTodo
  }
)(NewTodo);
