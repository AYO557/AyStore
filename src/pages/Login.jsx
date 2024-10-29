import { useEffect, useState } from "react";
import InputArea from "../components/basic/InputArea";
import RegisterButton from "../components/basic/RegisterButton";
import RegTitle from "../components/basic/RegTitle";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { fetchUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Validating account...");

    try {
      const error = await fetchUser(email, password, "login");
      if (error) {
        throw new Error(error);
      }
      toast.success("Authentication successful");

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    setIsDisabled(true);
    if (email !== "" && password !== "") {
      setIsDisabled(false);
    }
  }, [email, password]);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[80%] lg:w-[initial]">
      <div className="p-5 lg:w-[initial] w-[90%]">
        <RegTitle text={"Login"} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputArea
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            text={"Email"}
            type={"email"}
          />
          <InputArea
            text={"Password"}
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <RegisterButton isDisabled={isDisabled} text={"Sign In"} />
          <ToastContainer />
          <div className="text-sm flex justify-between font-bold">
            <span className="flex items-center gap-1">
              <input type="checkbox" id="remember" />
              <label className="" htmlFor="remember">
                Remember me
              </label>
            </span>
            <Link to={"signup"}>
              <span className="lg:text-blue-500 text-white hover:text-blue-600 cursor-pointer">
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
