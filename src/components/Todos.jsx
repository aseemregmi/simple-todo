import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTodos from '../actions/getTodosAction';
import Spinner from './Spinner';
import markAsComplete from '../actions/markAsCompleteAction';
import deleteTodo from '../actions/deleteTodoAction';
import { Link } from 'react-router-dom';

import Todo from './Todo';

class Todos extends Component {
  state = {
    todos: {}
  };

  componentWillMount() {
    if (!this.props.auth) {
      this.props.history.push('/login');
    }
    console.log('COMPONENT WILL MOUNT');
  }

  componentWillReceiveProps(props) {
    if (!props.auth) {
      props.history.push('/login');
    }
  }

  componentDidMount() {
    const { auth } = this.props;
    this.props.getTodos(auth);
  }

  render() {
    if (!this.props.todos) {
      return (
        <div className="container m-auto">
          <Spinner />
        </div>
      );
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
          auth={this.props.auth}
          onMarkAsCompleteClick={this.props.markAsComplete}
          onDeleteTodo={this.props.deleteTodo}
        />
      );
    });

    return (
      <div className="container col-lg-6 m-auto">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <h2>Your Todo's</h2>
              {todosInDOM}
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Link to="/" className="btn btn-block btn-primary">
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    auth: state.currentUser.user['x-auth']
  };
}

export default connect(
  mapStateToProps,
  { getTodos, markAsComplete, deleteTodo }
)(Todos);
