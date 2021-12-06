import React , {Component} from 'react';

class ListFavorits extends Component {
  render() {
    console.log('Props', this.props.profiles);
    console.log('Props', this.props.users);    
    console.log('Props', this.props.movies);
    
    return (
      <ol>
      	<li>
      		test
      	</li>
      </ol>
      )
  }
}

export default ListFavorits
  