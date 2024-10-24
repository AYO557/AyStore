import { Outlet } from "react-router-dom";
import NavBox from "../components/mono/NavBox";

function App() {
  return (
    <div>
      <NavBox />
      <div className="text-center font-bold bg-blue-600 text-white h-[90vh] text-4xl">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
