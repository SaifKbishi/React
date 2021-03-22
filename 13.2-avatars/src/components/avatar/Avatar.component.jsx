import React from "react";
import "./avatar.styles.css";
const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <h4>{`${avatar.firstName} ${avatar.lastName}`}</h4>
      <img src={avatar.img} alt={avatar.name} />
    </div>
  );
};
export default Avatar;
