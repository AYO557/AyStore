import RegisterButton from "../components/basic/RegisterButton";
import InputArea from "../components/basic/InputArea";
import RegTitle from "../components/basic/RegTitle";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="p-5 w-[60%]">
        <RegTitle text={"Sign Up"} />
        <form className="flex flex-col gap-4">
          <InputArea text={"Email"} type={"email"} />
          <InputArea text={"Password"} type={"password"} />
          <InputArea text={"Confirm Password"} type={"password"} />
          <RegisterButton text={"Sign Up"} />
        </form>
        <div className="text-sm flex justify-between font-bold">
          <span>Already have an account?</span>
          <Link to={"/auth"}>
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
