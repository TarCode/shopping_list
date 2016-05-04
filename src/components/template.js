import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var logoStyle = {
      marginLeft: '15px'
    }
    return(
      <div>
        <nav>
          <div className="nav-wrapper blue">
            <Link style={ logoStyle } to="/" className="brand-logo">GROCEREMEMBER</Link>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
}
