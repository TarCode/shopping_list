import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var titleStyle = {
      marginTop: '15%'
    }
    return(
      <div className='home center'>
        <br/>
          <h2 style={ titleStyle } className='title'>
          GROCEREMEMBER
          <br/>
          <small>Never forget your groceries again!</small>
        </h2>
        <Link className='btn red' to='/shopping_list'>Launch</Link>
        <div>
        <br/>
        </div>
      </div>
    )
  }
}
