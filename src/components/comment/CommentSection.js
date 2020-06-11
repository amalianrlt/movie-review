import React, { useState } from "react";

const CommentSection = () => {
  const [newComment, setNewComments] = useState("");
  const [comments, setComments] = useState([]);

  // const addComment = (e) => {
  //   e.preventDefault()
  //   setComments([...comments, {comment: "hello", id: comments.length+1}])
  // }

  const handleChange = (e) => {
    e.preventDefault();
    setNewComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment === "") return;
    setComments([...comments, { comment: "", id: comments.length+1 }]);
    e.target.reset();
    // console.log(newComment);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input your comment"
          onChange={handleChange}
          required
        />
        {/* <input type="submit" value="Add Comment" */}
        <ul>
          {comments.map((item) => (
            <li key={item.id}>
              {item.comment}
            </li>
          ))}
          <li>coba</li>
        </ul>
      </form>
    </div>
  );
};

export default CommentSection;
