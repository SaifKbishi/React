import React from "react";
import "./avatarList.styles.css";
import Avatar from "../avatar/Avatar.component";
const AvatarList = ({ avatars }) => {
  return (
    <div className="avatar-container">
      {avatars.map((avatar) => {
        return (
          <React.Fragment key={avatar.id}>
            <Avatar avatar={avatar} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default AvatarList;
