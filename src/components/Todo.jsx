import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Todo extends Component {
  state = {
    _id: '',
    text: '',
    completed: '',
    completedAt: ''
  };

  static getDerivedStateFromProps(props, state) {
    const { _id, text, completed, completedAt } = props;
    return { _id, text, completed, completedAt };
  }

  render() {
    const { _id, text, completed, completedAt } = this.state;

    let textClass = classnames({
      'text-danger': !completed,
      'text-success': completed
    });
    const date =
      new Date(completedAt).getUTCFullYear().toString() +
      '/' +
      (new Date(completedAt).getMonth() + 1) +
      '/' +
      new Date(completedAt).getDay().toString();

    const completedAtInDOM = completedAt ? (
      <h6 classnames="mb-6">
        <strong> Completed At: {date}</strong>
      </h6>
    ) : null;

    return (
      <div className="card mb-2 mt-4 ml-2 mr-2">
        <div className="card-body">
          <h4 className={textClass + ' mb-3'}>{text}</h4>
          {completedAtInDOM}
          {!completed ? (
            <button
              className="btn btn-primary btn-block"
              onClick={this.onMarkAsCompleteClick}
            >
              Mark As Complete
            </button>
          ) : (
            <button
              className="btn btn-danger btn-block"
              onClick={this.onDeleteClick}
            >
              Delete
            </button>
          )}
          <Link to={`/todos/update/${_id}`}>
            <button className="btn btn-alert btn-block">Update</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Todo;
