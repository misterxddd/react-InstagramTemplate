import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';

import './Header.css';

type HeaderProps = {
  username: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <div className="container h-flex">
        <Link to="/feed/" className="logo">
          <img alt="Sas" src={logo} />
        </Link>
        <nav className="links">
          <ul className="nav-list">
            <li>
              <Link to="/feed/" className="menu__links">
                Feed
              </Link>
            </li>
            <li>
              <Link to={`/profile/${props.username}`} className="menu__links">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;