import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';

import './Header.css';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
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
                 Back to Feed
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;