import React from "react";

const Button = ({ text, size = "sm" }) => {
  return <span className={`button button--${size}`}>{text}</span>;
};

export default Button;
