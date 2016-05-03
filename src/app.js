import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router history={ browserHistory }>
        <Route path='/' component={ Home }/>
      </Router>
    )
  }
}
