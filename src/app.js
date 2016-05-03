import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/home';
import ShoppingList from './components/shopping_list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router history={ browserHistory }>
        <Route path='/' component={ Home }/>
        <Route path='/shopping_list' component={ ShoppingList }/>
      </Router>
    )
  }
}
