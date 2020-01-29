import React from "react";

import "./Avatar.css";

const Avatar = ({ alt, width, style, className }) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={`https://placeimg.com/${width}/${width}/any`}
        alt={alt}
        style={{ width: width, height: width }}
      />
    </div>
  );
};

export default Avatar;
