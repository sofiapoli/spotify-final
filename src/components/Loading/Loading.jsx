import "./Loading.css";

import React from "react";

const Loading = () => {
  return (
    <div className="m-0 m-auto">
      <div className="lds-hourglass">
        <h1>Loading...</h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
