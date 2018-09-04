import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  componentWillMount() {
    if (!this.props.auth) {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div className="container">
        <h2>Welcome to Simple Todo App</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.currentUser.user['x-auth'] };
}

export default connect(mapStateToProps)(Home);
