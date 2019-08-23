import React from 'react';

import { postObject } from '../../types/user-post';

import User from '../User/User';


type PostItemProps = {
  post: postObject;
  name: string;
  photo: string;
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const { post: { src, alt, descr }, name, photo } = props;
  return (
    <div className="post" key={name+alt}>
      <User 
        src={photo}
        alt={name}
        name={name}
        min/>
      <img src={src} alt={alt}/>
      <div className="post__name">
        {name}
      </div>
      <div className="post__descr">
        {descr}
      </div>
    </div>
  )
};

export default PostItem;