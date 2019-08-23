export type userPostsObject = {
  name: string;
  photo: string;
  posts: postObject[];
}

export type postObject = {
  src: string;
  alt: string;
  descr: string;
}

export type userObject = {
  name: string;
  photo: string;
}