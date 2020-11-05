import React from "react";

const UserThumb = ({ profile_picture, username }) => {
  return (
    <div className="userThumb">
      <img
        className="userThumb__img"
        src={profile_picture}
        alt={username}
      ></img>
      <p className="userThumb__text">{username}</p>
    </div>
  );
};

export default UserThumb;
