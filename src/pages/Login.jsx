import React from "react";
import InputArea from "../components/basic/InputArea";
import RegisterButton from "../components/basic/RegisterButton";
import RegTitle from "../components/basic/RegTitle";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="p-5 w-[60%]">
        <RegTitle text={"Login"} />
        <form className="flex flex-col gap-4">
          <InputArea text={"Email"} type={"email"} />
          <InputArea text={"Password"} type={"password"} />
          <RegisterButton text={"Sign In"} />
          <div className="text-sm flex justify-between font-bold">
            <span className="flex items-center gap-1">
              <input type="checkbox" id="remember" />
              <label className="" htmlFor="remember">
                Remember me
              </label>
            </span>
            <Link to={"signup"}>
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                Sign Up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
