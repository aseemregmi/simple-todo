import React, { Component } from 'react';
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

    return (
      <div className="card mb-2 mt-4 ml-2 mr-2">
        <div className="card-body">
          <h4 className={textClass + ' mb-3'}>{text}</h4>
          {!completed ? (
            <button className="btn btn-primary btn-block">
              Mark As Complete
            </button>
          ) : (
            <button className="btn btn-danger btn-block">Delete</button>
          )}
          <button className="btn btn-alert btn-block">Update</button>
        </div>
      </div>
    );
  }
}

export default Todo;
