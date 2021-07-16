import React from "react";
import "./LoadingScreen.css";
import Loader from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="App__LoadingScreenWrapper">
      <Loader type="Watch" height="100" width="100" color="#454569" />
      <h4>Time Travelling..🚀</h4>
    </div>
  );
};

export default LoadingScreen;
