import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import signUpUser from '../actions/signUpUserAction';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillMount() {
    if (this.props.auth) {
      this.props.history.push('/');
    }
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
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signUpUser(user);

    this.props.history.push('/');
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
                      <h3>SignUp now to manage your Todos</h3>
                    </div>
                  </div>
                  <h3 className="">SignUp</h3>
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
                    value="Sign Up"
                    className="btn btn-block btn-primary"
                  />
                </form>

                <div className="card mt-5">
                  <div className="card-body">
                    <h3 className="text-center">Already have an account ?</h3>
                    <Link to="/login" className="btn btn-block btn-success">
                      Login Now
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
  { signUpUser }
)(SignUp);
