import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TodoUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      text: '',
      completed: false,
      completedAt: null,
      idParams: this.props.match.params.id
    };
  }

  UNSAFE_componentWillMount() {
    if (!this.props.auth) {
      this.props.history.push('/login');
    }

    const { idParams } = this.state;
    let todoMatched;
    this.props.todos.forEach(todo => {
      if (todo._id === idParams) {
        todoMatched = todo;
        return;
      }
    });

    if (!todoMatched) {
      this.setState({ text: 'Not Found' });
    } else {
      this.setState({
        _id: todoMatched._id,
        text: todoMatched.text,
        completed: !!todoMatched.completed,
        completedAt: todoMatched.completedAt
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = e => {
    this.setState({ [e.target.name]: !!e.target.checked });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.history.push('/');
  };
  render() {
    if (this.state.text === 'Not Found') {
      return (
        <div className="row">
          <div className="col-md-4 m-auto">
            <div className="card">
              <div className="card-body m-auto">
                <h3>Todo Not Found</h3>
              </div>
              <Link to="/" className="nav-link m-auto">
                <i className="fas fa-home" /> Goto Home Page
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container m-auto">
        <div className="row">
          <div className="col-md-4 m-auto">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Todo : </label>
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  onChange={this.onChange}
                  value={this.state.text}
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="completed"
                  checked={!!this.state.completed}
                  onChange={this.handleCheckboxChange}
                />
                &nbsp; Todo Completed ?
              </div>
              <input
                type="submit"
                value="Update"
                className="btn btn-block btn-secondary"
              />
            </form>
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

export default connect(mapStateToProps)(TodoUpdate);
