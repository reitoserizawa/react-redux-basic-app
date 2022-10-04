export default function postReducer(state = { posts: [], post: {} }, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "NEW_POST":
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
