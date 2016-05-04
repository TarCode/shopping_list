import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
      <nav>
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo">GROCEREMEMBER</Link>
        </div>
      </nav>
        { this.props.children }
      </div>
    )
  }
}
