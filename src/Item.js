import React, { Component } from 'react'; 


class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item-container'>

        <div className='left-item-container'>
          <img src={this.props.productImgUrl} width='150px' height='150px'></img>
        </div>

        <div className='right-item-container'>
          <div>
            <a className='increment-arrow' id={this.props.id} onClick={this.props.onClick}>↑ </a>
            <span>{this.props.voteCount}</span>
          </div>

          <p><a href='#'>{this.props.productName}</a></p>
          <p>{this.props.description}</p>
          <p>Submitted By : <img className='profile-picture' src={this.props.avatarImgUrl} alt='pic'></img></p>
        </div>
      </div>
    )
  }
}

export default Item;

