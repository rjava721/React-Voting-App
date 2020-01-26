import React, { Component } from 'react';
import App from './App';
import { render } from '@testing-library/react';


// be careful of 'this'.
// the props are 
// voteCount
// productName
// producedBy and year
const Item = (props) => {
  return (
    <div className='item-container'>
      <div className='left-item-container'>
        <img src='https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='150px' height='150px'></img>
      </div>
      <div className='right-item-container'>
        <div>
          <a>+</a>
          <span>{props.voteCount}</span>
        </div>
        
        <p><a href='#'>{props.productName}</a></p>
        <p>{props.producedBy}, {props.year}</p>
        <p>Submitted By : <img className='profile-picture' src='www.glas.com' alt='pic'></img></p>
      </div>
    </div>
  )
}

export default Item;


//vote count
// name of the product
// the date taht the product became available (year)'
// who produced that product
// and the user who submitted that product