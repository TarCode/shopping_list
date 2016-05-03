import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Home</h2>
        <Link to='/shopping_list'>Shopping List</Link>
      </div>
    )
  }
}
