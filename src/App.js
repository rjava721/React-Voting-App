import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';
import productData from'./react-voting-app-data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: productData
    }
  }

  render() {
    let productData= this.state.jsonData

    return(
      <div className='main-container'>
        <Header />
        {/* display all products */}
        {productData.map(product => {
          return <Item id={product.id} productName={product.productName} voteCount={product.votes} description={product.description} productImgUrl={product.productImgUrl} />
        })}
      </div>
    )
  }
}

export default App;
// header => title
// item component
// extra, add component
// lichgate

