import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Feed from '../Feed/Feed';
import Profile from '../Profile/Profile';

import {ProviderInstaService} from '../InstaServiceContext/InstaServiceContext';
import InstaService from '../../services/InstaService/InstaService';
import Auth from '../Auth/Auth';

type AppProps = {
  
}

type AppState = {
  instaService: InstaService,
  username: string;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    instaService: new InstaService(),
    username: ""
  }

  setUsername = (username: string) => {
    this.setState({
      username
    });

  }

  render() {
    const {username} = this.state
    return (
      <ProviderInstaService value={this.state.instaService}>
        <Router>
          <div className="App">
            <Route path="/" component={ () => <Auth setUser={this.setUsername}/>} exact/>
            <Route path="/feed/" component={ () => {
              return username ? <Feed username={this.state.username}/> : null 
            }} exact/>
            <Route path="/profile/:name" component={Profile}/>
          </div>
        </Router>
      </ProviderInstaService>
    );
  }
}

export default App;
