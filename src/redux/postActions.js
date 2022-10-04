export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((r) => r.json())
    .then((data) =>
      dispatch({
        type: "FETCH_POSTS",
        payload: data,
      })
    );
};

export const createPost = (newData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((r) => r.json())
    .then((post) =>
      dispatch({
        type: "NEW_POST",
        payload: post,
      })
    );
};
