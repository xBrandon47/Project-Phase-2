import React, { useState } from "react";
import "../Card.css";

function MomCarCard({ momCar, onDeleteMomCar, }) {
  const { id, name, hp, engine, topSpeed, price, image, comment } = momCar;
  const [showFront, setShowFront] = useState("");
  const [emoji, setEmoji] = useState(true);
  // const [comments, setComments] = useState("");

  function emojiToggle() {
    setEmoji((emoji) => !emoji);
  }

  function toggle() {
    setShowFront((showFront) => !showFront);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/momcar/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteMomCar(momCar);
      });
  }

  // function handleComment() {
  //   fetch(`http://localhost:3000/momcar/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       comment: comment,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((newComment) => {
  //       setMomsCar([...momCar, newComment]);
  //     });
  //   setComments("");
  // }

  return (
    <div className="container">
      <br></br>
      <div className="content">
        <div>{name}</div>
      </div>
      <div>
        <img
          src={showFront ? image.front : image.back}
          onClick={toggle}
          alt="mom"
          className="image"
        />
      </div>
      <div className="sub-text">
        <div>Hp:{hp}</div>
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
      <button onClick={handleDeleteClick} className="del-btn">
        Impound
      </button>
      <div className="sub-text">
        <div>{comment}</div>
      </div>
      <button className={emoji ? "like" : "like"} onClick={emojiToggle}>
        {" "}
        {emoji ? "❤️" : "🤮"}
      </button>
      <div>
        <input placeholder="Place Comment..."></input>
        <button >Edit Comment</button>
      </div>
    </div>
  );
}
export default MomCarCard;
