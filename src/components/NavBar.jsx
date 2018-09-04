import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import logoutUserAction from '../actions/logoutUserAction';

class NavBar extends Component {
  onLogOutClick = e => {
    const auth = this.props.user['x-auth'];

    this.props.logoutUserAction(auth);

    e.preventDefault();
  };
  render() {
    const resultInDOM1 = this.props.user.email ? (
      <li className="nav-item">
        <Link
          to="/users/logout"
          className="nav-link"
          onClick={this.onLogOutClick}
        >
          Logout
        </Link>
      </li>
    ) : (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    );

    const resultInDOM2 = this.props.user.email ? (
      <li className="nav-item">
        <span className="nav-link">{this.props.user.email}</span>
      </li>
    ) : null;

    return (
      <nav className="navbar bg-light navbar-light navbar-expand-sm mb-3 py-1 ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Manage Your Todo's
          </a>
        </div>

        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" />
            </Link>
          </li>
          {resultInDOM1}
          {resultInDOM2}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser.user
  };
}

export default connect(
  mapStateToProps,
  { logoutUserAction }
)(NavBar);
