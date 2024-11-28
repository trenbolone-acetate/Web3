import React, { useState } from "react";

const Card = ({ smartphone, currency, calculatePrice }) => {
  const { name, manufacturer, description, url, price, alt } = smartphone;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log(newComment)
      setComments([...comments, newComment]);
      setNewComment("");
      alert(`Your comment "${newComment}" was successfully added!`)
    }
  };

  return (
    <div className="Card">
      <div className="Card-header">
        <h3>{name}</h3>
        <h4>Manufacturer: {manufacturer}</h4>
        <img src={url} alt={alt} className="Card-logo" />
      </div>
      <p>{description}</p>
      <p>
        Price: {calculatePrice(price)} {currency}
      </p>
      <form onSubmit={handleAddComment}>
        {/* <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        /> */}
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
