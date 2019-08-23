import React from 'react';
import User from '../User/User';
import Pallete from '../Pallete/Pallete';
import ProfileHeader from '../Header/ProfileHeader';
import { RouteComponentProps } from 'react-router-dom';
import InstaService from '../../services/InstaService/InstaService';
import withInstaService from '../hoc/withInstaService';
import { userPostsObject } from '../../types/user-post';

interface ProfileProps extends RouteComponentProps<{name: string}> {
  getUser: any
}

interface ProfileState {
  username: string;
  myUsername: userPostsObject;
}

class Profile extends React.Component<ProfileProps, ProfileState> {

  state = {
    username: this.props.match.params.name,
    myUsername: {name: '', photo: '', posts: []}
  }

  componentDidMount() {
    console.log(this.state.username)
    this.props.getUser(this.state.username)
      .then((myUsername: userPostsObject) => this.setState({
        myUsername
      }))
      .catch(this.onError);
  };

  onError = (err: any) => {
    console.log(err);
  }

  render() {
    const {myUsername: {name, photo, posts}} = this.state;
    return (
      <React.Fragment>
        <ProfileHeader />
        <div className="wrapper profile">
          <User 
              src={photo}
              alt={name}
              name={name}
            />
          
          <Pallete posts={posts}/>
        </div>
      </React.Fragment>
      
    );
  }
};

const mapFunction = (instaService: InstaService) => {
  return {
    getUser: instaService.getUser
  };
}

export default withInstaService(mapFunction)(Profile);