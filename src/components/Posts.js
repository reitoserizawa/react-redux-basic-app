import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postActions";

function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let posts = useSelector((state) => {
    if (state.post) {
      return [state.post, ...state.posts];
    } else {
      return [state.posts];
    }
  });

  const postItems = posts.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  });

  return (
    <>
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    </>
  );
}

export default Posts;
