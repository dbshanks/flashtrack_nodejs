import React from "react";
import { AnimationWrapper } from "../../components/AnimationWrapper";

export const Error404 = () => {
  return (
    <AnimationWrapper
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Error 404</h1>
    </AnimationWrapper>
  );
};
