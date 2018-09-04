import React, { Component } from 'react';
import loginUser from '../actions/loginUserAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      spinner: false
    };
  }

  componentWillReceiveProps(props) {
    if (props.auth) {
      props.history.push('/');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);

    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card">
              <div className="card-body">
                <div className="text-center card-title">
                  <div className="card mb-3 bg-light">
                    <div className="card-body">
                      <h3>You need to login to use the app</h3>
                    </div>
                  </div>
                  <h3 className="">Login</h3>
                </div>

                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.onChange}
                      value={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      onChange={this.onChange}
                      value={this.state.password}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-block btn-primary"
                  />
                </form>

                <div className="card mt-5">
                  <div className="card-body">
                    <h3 className="text-center">Don't have an account ?</h3>
                    <Link to="/signup" className="btn btn-block btn-success">
                      Sign Up Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    loginUser
  }
)(Login);
