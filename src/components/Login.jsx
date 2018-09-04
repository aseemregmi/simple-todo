import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="text-center card-title">
              <h3 className="">Login</h3>
            </div>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="inputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail1"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <input
                type="submit"
                value="Login"
                class="btn btn-block btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
