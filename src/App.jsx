import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import NavBar from './components/NavBar';
import Login from './components/Login';
import Todos from './components/Todos';
import TodoUpdate from './components/TodoUpdate';
import Home from './components/Home';
import SignUp from './components/SignUp';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/todos" component={Todos} />
              <Route exact path="/todos/update/:id" component={TodoUpdate} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
