import React, { useState } from "react";
import "../Card.css";

function SportCarCard({ sport, onDeleteSportCar, setSportCar }) {
  const { id, name, hp, engine, topSpeed, price, image, comment } = sport;
  const [showFront, setShowFront] = useState("");
  const [emoji, setEmoji] = useState(true);
  const [comments, setComments] = useState("");


  function emojiToggle() {
    setEmoji((emoji) => !emoji);
  }

  function toggle() {
    setShowFront((showFront) => !showFront);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/sportcars/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteSportCar(sport);
      });
  }

  // function handleChangeComment(changeComment){
  //   const updateComment = sport.comment.filter((words) => sport.id !== changeComment.id)
  //   setComments(updateComment)
  // }

  function handleComment() {
    fetch(`http://localhost:3000/sportcars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
      }),
    })
      .then((r) => r.json())
      .then((newComment) => {
        setSportCar([...sport, newComment]);
      });
    setComments("");
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
          alt="sport"
          className="image"
        />
      </div>
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
        <div>{comment}</div>
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
        <input 
        className="commentBox" 
        placeholder="Place Comment..."
        value= {comments}
        onChange= {(e) => setComments(e.target.value)}>
        </input>
        <button onClick={handleComment} >Edit Comment</button>
      </div>
    </div>
  );
}

export default SportCarCard;
