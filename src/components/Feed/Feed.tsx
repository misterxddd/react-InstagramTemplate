import React from 'react';

import PostList from '../PostList/PostList';
import UserList from '../UserList/UserList';
import Row from '../Row/Row';
import Header from '../Header/Header';

type FeedProps = {
  username: string;
}

const Feed: React.FC<FeedProps> = ({username}) => {
  return (
    <React.Fragment>
      <Header username={username} />
      <div className="container feed">
        <Row leftNode={<PostList username={username}/>} rightNode={<UserList username={username}/>}/>
      </div>
    </React.Fragment>
  );
};

export default Feed;