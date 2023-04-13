import React from "react";

const RobotCard = ({ id, email, username, name }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw3  shadow-3">
      <h2> {username} </h2>
      <img
        src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${id}`}
        alt="img"
        height={200}
        width={200}
      />{" "}
      <div>
        <h2> {name} </h2> <p> {email} </p>{" "}
      </div>{" "}
    </div>
  );
};
export default RobotCard;
