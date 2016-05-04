import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Template from './components/template';
import Home from './components/home';
import ShoppingList from './components/shopping_list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router history={ browserHistory }>
        <Route path='/' component={ Template }>
          <IndexRoute component={ Home }/>
          <Route path='/shopping_list' component={ ShoppingList }/>
        </Route>
      </Router>
    )
  }
}
