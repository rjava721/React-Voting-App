import React, { Component } from 'react'; 


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteAmount: this.props.voteCount
    }
  }

updateVote = () => {
  console.log('update vote count');
  let votesPlaceholder = this.state.voteAmount;
  console.log(votesPlaceholder);
  votesPlaceholder++;
  this.setState({voteAmount: votesPlaceholder})
}

  render() {
    return (
      <div className='item-container' key={this.props.id}>

        <div className='left-item-container'>
          <img src={this.props.productImgUrl} width='150px' height='150px'></img>
        </div>

        <div className='right-item-container'>
          <div>
            <a onClick={this.updateVote}>+</a>
            <span>{this.state.voteAmount}</span>
          </div>

          <p><a href='#'>{this.props.productName}</a></p>
          <p>{this.props.description}</p>
          <p>Submitted By : <img className='profile-picture' href={this.props.avatarImg} alt='pic'></img></p>
        </div>
      </div>
    )
  }
}

export default Item;

