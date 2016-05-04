import React from 'react';

export default class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { shopping_list: [], total: 0}
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    var item = document.getElementById('item').value;
    var price = document.getElementById('price').value;
    if(item && price > 0){
      this.state.shopping_list.push({ item: item, price: price });
      this.state.total = parseFloat(this.state.total) + parseFloat(price);
      document.getElementById('item').value = '';
      document.getElementById('price').value = null;
      this.setState(this.state);
    }
    else {
      window.alert('Values cannot be empty or zero');
    }
  }

  render() {
    var shopping_list_items = this.state.shopping_list.map(function(item, index) {
      return(
        <tr key={ index }>
          <td className='center'>{ item.item }</td>
          <td className='center'>{ item.price }</td>
        </tr>
      )
    }.bind(this));
    return(
      <div className='container'>
        <div className='container'>
            <div className="row ">
              <div className="input-field col s5">
                <input placeholder='Item' id="item" type="text" className="validate"/>
              </div>
              <div className="input-field col s5">
                <input placeholder='price' id="price" type="number" className="validate"/>
              </div>
              <div className="input-field col s1">
                <button onClick={ this.addItem } className='btn btn-large red'>+</button>
              </div>
            </div>
            <hr/>
            <table className='table card yellow lighten-2'>
              <thead>
                <tr id='item_row'>
                  <th className='center'>Item</th>
                  <th className='center'>Price</th>
                </tr>
              </thead>
              <tbody>
                { shopping_list_items }
              </tbody>
            </table>
            <h3 className='right'>Total: <strong>{ this.state.total }</strong></h3>
          </div>
      </div>
    )
  }
}
