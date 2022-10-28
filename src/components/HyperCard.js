import React, { useState } from "react";
import "../Card.css";


function HyperCard({ hyper, onDeleteHyperCar }) {
  const { id, name, hp, engine, topSpeed, price, image, comment } = hyper;
  const [showFront, setShowFront] = useState("");
  const [emoji, setEmoji] = useState(true);

  function emojiToggle() {
    setEmoji((emoji) => !emoji);
  }

  function toggle() {
    setShowFront((showFront) => !showFront);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/hypercars/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteHyperCar(hyper);
      });
  }

  return (
    <div className="container">
      <br></br>
      <div className="content">
        <div>{name}</div>
      </div>
      <div >
        <img
          src={showFront ? image.front : image.back}
          onClick={toggle}
          alt="hyper"
          className="image"
        />
      </div >
      <div className="sub-text">
        <div>{hp}</div>
      </div>
      <div className="sub-text">
        <div>{engine}</div>
      </div>
      <div className="sub-text">
        <div>Top Speed: {topSpeed}</div>
      </div>
      <div className="sub-text">
        <div>${price}</div>
      </div>
      <div className="sub-text">
        <div>Comments: {comment}</div>
      </div>
      <button onClick={handleDeleteClick} className="del-btn">
        Impound
      </button>
      <button
        className={
          emoji ? "like" : "like"
        }
        onClick={emojiToggle}
      >
        {" "}
        {emoji ? "❤️" : "🤮"}
      </button>
      <div>
        <input placeholder="Place Comment..."></input>
        <button >Edit Comment</button>
      </div>
      {/* ♥ */}
      {/* ❤️️ */}
    </div>
  );
}

export default HyperCard;
