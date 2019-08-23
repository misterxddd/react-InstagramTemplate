import React from 'react';

import InstaService from '../../services/InstaService/InstaService';
import withInstaService from '../hoc/withInstaService';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PostItem from '../PostItem/PostItem';
import { userPostsObject } from '../../types/user-post';

type PostListProps = {
  getAllFriendsPosts: any;
  username: string;
}

type PostListState = {
  error: boolean;
  posts: userPostsObject[];
}

class PostList extends React.Component<PostListProps, PostListState> {
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    this.props.getAllFriendsPosts(this.props.username)
      .then(this.onPosts)
      .catch(this.onError)
  }

  private onError = () => {
    this.setState({
      error: true
    })
  }

  private onPosts = (posts: any) => {
    this.setState({
      posts
    })
  }

  private renderItems() {
    return this.state.posts.map((item: userPostsObject) => {
      const {
        name, photo, posts
      } = item;
  
      return posts.map((post) => {
        return (
          <PostItem post={post} name={name} photo={photo} />
        )
      })
    });
  }

  render() {
    return (
      <div>
        {
          this.state.error ? <ErrorIndicator />
          : this.renderItems()
        }
      </div>
    );
  }

}

const mapFunction = (instaService: InstaService) => {
  return {
    getAllFriendsPosts: instaService.getAllFriendsPosts
  };
}

export default withInstaService(mapFunction)(PostList);