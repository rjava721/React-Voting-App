import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: [
        {
          "id": 1,
          "productName": "Water",
          "description": "Tims, 2017",
          "votes": 5,
          "url": "amazon.com",
          "avatarUrl": "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",
          "productImgUrl": "https://s3-media0.fl.yelpcdn.com/bphoto/q42asDU7NYc-xbeJIlPe_Q/o.jpg"
        },
        {
          "id": 2,
          "productName": "Iced Capp",
          "description": "Tims, 2017",
          "votes": 3,
          "url": "amazon.com",
          "avatarUrl": "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",
          "productImgUrl": "https://timhortons.ph/upload/assets/spLKatwVITPVyiwTgpnIF5IeszcCuf3XHHAKTIqRLlO4x0SQUL.jpg"
        },
        {
          "id": 3,
          "productName": "French Vanilla",
          "description": "Tims, 2017",
          "votes": 2,
          "url": "amazon.com",
          "avatarUrl": "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",
          "productImgUrl": "https://images.chickadvisor.com/item/3778/375/47f84c16075077a7671a16a71394ca03.jpg"
        },
        {
          "id": 4,
          "productName": "Double Double",
          "description": "Tims, 2017",
          "votes": 1,
          "url": "amazon.com",
          "avatarUrl": "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",
          "productImgUrl": "https://i.pinimg.com/236x/ab/5d/c8/ab5dc8a7c0e99f25bf6f5293668aeb18--tim-hortons-coffee-louise-penny.jpg"
        }
      ],
    }
  }

  handleChange = (event) => {
    // use event.target.id to find the product's location inside our array of products
    // increment the vote count
    // sort the array
    // then update our state array to the duplicate one using setState

    // we duplicate the state.productArray into newSortingArray
    let newSortingArray = [];
    this.state.productArray.forEach((product) => { newSortingArray.push(product); })
 
    newSortingArray.forEach(product => {
      //increment vote count
      if (product.id === parseInt(event.target.id)) {
        product.votes ++;
      }
      // sort the list of products from the highest vote count to the lowest vote count
      newSortingArray.sort((a,b) => {
        return b.votes - a.votes;
      })
    })

    //update state array to the duplicate modified array
    this.setState({ productArray : newSortingArray });
  }

  render() {
    return(
      <div className='main-container'>
        <Header />
        
        {/* display all products */}
        {this.state.productArray.map(product => {
          return <Item id={product.id} productName={product.productName} voteCount={product.votes} description={product.description} productImgUrl={product.productImgUrl} avatarImgUrl={product.avatarUrl} onClick={this.handleChange}/>
        })}
         
      </div>
    )
  }
}

export default App;
