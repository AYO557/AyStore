import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBox, { MobileNavBox } from "../components/mono/NavBox";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(null);
    let getUser = JSON.parse(localStorage.getItem("user"));
    if (!getUser) {
      setUser(null);
    } else {
      setUser(getUser);
    }
  }, []);
  return (
    <div>
      <NavBox user={user} />
      <MobileNavBox />
      <div className="text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
