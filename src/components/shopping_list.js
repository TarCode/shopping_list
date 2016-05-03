import React from 'react';
import { Link } from 'react-router';

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Shopping List</h2>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
