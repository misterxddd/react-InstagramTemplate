import React from 'react';
import Img from 'react-image';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

type UserProps = {
  src: string;
  alt: string;
  name: string;
  min?: boolean;
}

const User: React.FC<UserProps> = (props) => {
  const {src, alt, name} = props;
  const cls = [
    'user',
    props.min ? 'min' : ''
  ];
  return (
    <div>
      <Link to={`/profile/${name}`} className={cls.join(' ')}>
        <Img src={src} alt={alt} loader={<Spinner min/>}/>
        <div className="user-name">{name}</div>
      </Link>
    </div>
  );
};

export default User;