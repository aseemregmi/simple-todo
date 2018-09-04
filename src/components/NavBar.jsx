import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '/users/me/token',
      routeName: 'Logout',
      userEmail: 'aseem.regmi22@gmail.com'
    };
  }

  render() {
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
          <li className="nav-item">
            <Link to={this.state.route} className="nav-link">
              {this.state.routeName}
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link">{this.state.userEmail}</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
