import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class Todos extends Component {
  state = {
    todos: {}
  };
  render() {
    if (!this.props.todos) {
      return <div>Loading</div>;
    }

    const todos = this.props.todos;

    const todosInDOM = todos.map(todo => {
      return (
        <Todo
          key={todo._id}
          text={todo.text}
          _id={todo._id}
          completed={todo.completed}
          completedAt={todo.completedAt}
        />
      );
    });

    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <h2>Your Todo's</h2>
              {todosInDOM}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

export default connect(mapStateToProps)(Todos);
