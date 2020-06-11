import React, { useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;

const CommentSection = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment === "") return;
    setComments([
      ...comments,
      { comment: newComment, id: comments.length + 1 },
    ]);
    e.target.reset();
  };

  return (
      <form onSubmit={handleSubmit}>
        <TextArea rows={3} onChange={handleChange} placeholder="Input your comment" required />
        <input type="submit" value="Add Comment" />
        <ul>
          {comments.map((item) => (
            <li key={item.id}>{item.comment}</li>
          ))}
          <li>coba</li>
        </ul>
      </form>
  );
};

export default CommentSection;
