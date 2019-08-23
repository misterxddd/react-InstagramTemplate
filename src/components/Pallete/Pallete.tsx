import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Img from 'react-image';
import Spinner from '../Spinner/Spinner';
import { postObject } from '../../types/user-post';


interface PalleteProps extends RouteComponentProps<{name: string}> {
  posts: postObject[];
}

type PalleteState = {
  username: string;
}

class Pallete extends Component<PalleteProps, PalleteState> {
  state = {
    username: this.props.match.params.name
  }

  renderItems() {
    return this.props.posts.map((item: postObject) => {
      const {src, alt} = item;
      return (
        <React.Fragment key={alt}>
          <Img src={src} alt={alt} loader={<Spinner min/>}/>
        </React.Fragment>
      )
    });
  }

  render() {

    return (
      <div className="palette">
        {
          this.renderItems()
        }
      </div>
    );
  }
}

export default withRouter(Pallete);