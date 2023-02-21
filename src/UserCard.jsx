import { useState } from "react";
import "./UserCard.css";

function UserCard({ name, image }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <h1>{name} </h1>
      <img src={image} alt="" height="100" />
      <button
        onClick={() => {
          console.log("Clicked", likes);
          setLikes(likes + 1);
        }}
      >
        Like{likes}
      </button>
      <button
        onClick={() => {
          console.log("Clicked", dislikes);
          setDislikes(dislikes + 1);
        }}
      >
        Dislike{dislikes}
      </button>
    </div>
  );
}

export default UserCard;
