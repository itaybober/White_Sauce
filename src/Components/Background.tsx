import React from "react";
import backgroundImage from "../Pages/images/background/light_background.svg";

// @ts-ignore
function Background({ children }: BackgroundProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default Background;
