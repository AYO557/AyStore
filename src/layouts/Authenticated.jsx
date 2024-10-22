import React from "react";
import { Outlet } from "react-router-dom";
import VectorBlue from "../assets/img/shop-lady.jpg";

function Authenticated() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[40%] bg-white">
        <Outlet />
      </div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 140, 0.4), rgba(0, 0, 140, 0.4)), url(${VectorBlue})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[60%]"
      ></div>
    </div>
  );
}

export default Authenticated;
