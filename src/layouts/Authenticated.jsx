import { Outlet } from "react-router-dom";
import VectorBlue from "../assets/img/shop-lady.jpg";

function Authenticated() {
  const backgroundStyles = {
    background: `linear-gradient(rgba(0, 0, 140, 0.4), rgba(0, 0, 140, 0.4)), url(${VectorBlue})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex h-[100vh]">
      <div className="lg:w-[40%] lg:bg-white lg:text-black text-white bg-blue-500 w-full flex items-center justify-center custom-background">
        <Outlet />
      </div>
      <div
        style={backgroundStyles}
        className="w-[60%] hidden lg:inline-block"
      ></div>
    </div>
  );
}

export default Authenticated;
