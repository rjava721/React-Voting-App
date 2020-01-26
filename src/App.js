import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    // state = {
    // }     
  }

  render() {
    return(
      <div className='main-container'>
        <Header />
        <Item productName='Water' voteCount='0' producedBy='Dasani' year='2017' />
        <Item productName='Coffee' voteCount='0' producedBy='Tim' year='2017'/>
      </div>
    )
  }
}
export default App;


// header => title
// item component
// extra, add component
// lichgate

