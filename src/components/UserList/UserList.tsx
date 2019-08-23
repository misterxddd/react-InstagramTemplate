import React from 'react';

import User from '../User/User';
import InstaService from '../../services/InstaService/InstaService';
import withInstaService from '../hoc/withInstaService';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import { userObject } from '../../types/user-post';

import './UserList.css';

type UserListProps = {
  getUsers: any
  username: string;
}

type UserListState = {
  error: boolean;
  users: userObject[];
  myUsername: userObject;
}

class UserList extends React.Component<UserListProps, UserListState> {
  state = {
    error: false,
    users: [],
    myUsername: {name: '', photo: ''}
  }

  componentDidMount() {
    const {getUsers, username} = this.props;

    getUsers(username)
      .then((allUsers: any) => this.setState({
        myUsername: allUsers.myUsername,
        users: allUsers.users
      }))
      .catch(this.onError);
  };

  onError = (err: any) => {
    console.log(err);
    this.setState({
      error: true
    });
  }

  private renderItems() {
    return this.state.users.map((item) => {
      const {name, photo} = item;

      return (
        <li key={name}>
          <User src={photo} alt={name} name={name} min/>
        </li>
      )
    });
  }

  render() {
    const {myUsername: {name, photo}} = this.state;
    return (
      <React.Fragment>
        
        <div className="myUser">
          <User 
            src={photo}
            alt={name}
            name={name}
          />
        </div>
        
        <div className="users__block">
        <ul>
          {
            this.state.error ? <ErrorIndicator /> : this.renderItems()
          }
        </ul>
        </div>

      </React.Fragment>
    );
  }
};


const mapFunction = (instaService: InstaService) => {
  return {
    getUsers: instaService.getUsers
  };
}

export default withInstaService(mapFunction)(UserList);