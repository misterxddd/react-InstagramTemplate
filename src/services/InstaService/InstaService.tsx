import { postObject, userObject, userPostsObject } from "../../types/user-post";

class InstaService {
  _apiBase: string;

  constructor() {
    this._apiBase = 'http://localhost:5001';
  }

  private getResource = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return res.json();
  }

  getAllFriendsPosts = async (user: string) => {
    const res = await this.getResource('/users/');
    let friends: string[] = [];

    const userPosts: userPostsObject[] = [];

    for (let i = 0; i < res.length; ++i) {
      if (res[i].name === user) {
        friends = [...res[i].friends];
        break;
      }
    }

    if (!friends) {
      return null;
    }

    for (let i = 0; i < res.length; ++i) {
      for (let j = 0; j < friends.length; ++j) {
        if (res[i].name === friends[j]) {
          userPosts.push({
            name: res[i].name,
            photo: res[i].photo,
            posts: res[i].posts
          })
          friends.splice(j, 1);
        }
      }
    }

    return userPosts;    
  }

  getUsers = async (name: string) => {
    const res = await this.getResource('/users/');
    let friends = [], myUsername: userObject = {name:'', photo: ''};

    const users: userObject[] = [];

    for (let i = 0; i < res.length; ++i) {
      if (res[i].name === name) {
        friends = res[i].friends;
        myUsername = {name, photo: res[i].photo}
      }
    }
    if (!friends) {
      return null;
    }

    for (let i = 0; i < res.length; ++i) {
      for (let j = 0; j < friends.length; ++j) {
        if (res[i].name === friends[j]) {
          users.push({
            name: res[i].name,
            photo: res[i].photo
          })
          friends.splice(j, 1);
        }
      }
    }
    
    return {
      users,
      myUsername
    }
  }

  getUser = async (name: string) => {
    const res = await this.getResource('/users/');

    for (let i = 0; i < res.length; ++i) {
      if (res[i].name === name) {
        return {
          name,
          photo: res[i].photo,
          posts: res[i].posts
        }
      }
    }

  }

  checkUser = async (name: string, password: string) => {
    const res = await this.getResource('/users/');

    for (let i = 0; i < res.length; ++i) {
      if (res[i].name === name) {
        return res[i].password === password;
      }
    }

    return false;
  }

  getAllPhotos = async () => {
    const res = await this.getResource('/posts/');
    return res.map(this._transformPosts);
  }

  private _transformPosts = (post: postObject) => {
    return {
      src: post.src,
      alt: post.alt
    }
  }
}

export default InstaService;