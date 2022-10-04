import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { createPost } from "../redux/postActions";

function PostForm() {
  const [form, setForm] = useState({ title: "", body: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(form));
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          ></input>
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea
            type="body"
            name="body"
            onChange={handleChange}
            value={form.body}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(null, { createPost })(PostForm);
