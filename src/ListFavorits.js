import React , {Component} from 'react';

class ListFavorits extends Component {
  render() {
    const users = GetUsersArray(this.props.users);
    return (
      <ol className = 'contact-list'>     
      	{users.map((user)=>(
      		<li key={user.id}>
				<p>{user.name} favorite movie is {GetUserFavoriteMovie(user.id, this.props.profiles, this.props.movies)}</p>	
	  		</li>
      	)
    	)}
      </ol>
      )
  }
}

function GetUsersArray(usersObject){
  let users = [];
  for (let i = 1; i <= 6; i++) {
  		let user = usersObject[i];    
    	users.push(user);
	}
  return users;
}

function GetUserFavoriteMovie(userId, profiles, movies){
  let profile = profiles.filter(p => p.userID === userId.toString());
  let movieId = parseInt(profile[0].favoriteMovieID);  
  let movie = movies[movieId];
  return movie.name;
}
export default ListFavorits
  