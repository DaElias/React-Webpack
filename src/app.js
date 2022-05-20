import React from "react";
import LogoReact from "./logoReact.svg";
import LogoWebpack from "./logoWebpack.svg";
const app = () => {
  return (
    <>
      <div className="container">
        <LogoReact />
        <h1>+</h1>
        <LogoWebpack />
      </div>
      <h1>By DeCerchiaro</h1>
    </>
  );
};
export default app;
