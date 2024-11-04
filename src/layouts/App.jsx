import { Outlet } from "react-router-dom";
import NavBox, { MobileNavBox } from "../components/mono/NavBox";
import { useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

function App() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    if (!token) {
      setUser(null);
    }
  }, []);
  return (
    <div>
      <NavBox />
      <MobileNavBox />
      <div className="text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
