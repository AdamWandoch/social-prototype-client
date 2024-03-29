import React from 'react';
import { Post } from '../Post/Post';

export const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </>
  );
};
