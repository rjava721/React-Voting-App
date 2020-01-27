import React, { Component } from 'react';


const Item = (props) => {
  return (
    <div className='item-container' id={props.id}>

      <div className='left-item-container'>
        <img src={props.productImgUrl} width='150px' height='150px'></img>
      </div>

      <div className='right-item-container'>
        <div>
          <a onClick={updateVote}>+</a>
          <span>{props.votest}</span>
        </div>

        <p><a href='#'>{props.productName}</a></p>
        <p>{props.description}</p>
        <p>Submitted By : <img className='profile-picture' src='www.glas.com' alt='pic'></img></p>
      </div>
    </div>
  )
}

export default Item;

const updateVote = () => {
  console.log('update vote count');
}
