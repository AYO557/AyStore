import RegisterButton from "../components/basic/RegisterButton";
import InputArea from "../components/basic/InputArea";
import RegTitle from "../components/basic/RegTitle";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  let api = "http://localhost:3000/api/users/signup";

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Validating account...");
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      toast("Authentication successful");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsDisabled(true);
    if (name !== "" && email !== "" && password !== "" && confirm !== "") {
      setIsDisabled(false);
    }
  }, [name, email, password, confirm]);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[80%] lg:w-[initial]">
      <div className="lg:p-5 w-full">
        <RegTitle text={"Sign Up"} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputArea
            text={"Name"}
            type={"text"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <InputArea
            text={"Email"}
            type={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputArea
            text={"Password"}
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputArea
            text={"Confirm Password"}
            type={"password"}
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <RegisterButton isDisabled={isDisabled} text={"Sign Up"} />
          <ToastContainer />
        </form>
        <div className="text-sm flex justify-between font-bold">
          <span>Already have an account?</span>
          <Link to={"/auth"}>
            <span className="lg:text-blue-500 text-white hover:text-blue-600 cursor-pointer">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
