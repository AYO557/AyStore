import { Outlet } from "react-router-dom";

function Shop() {
  return (
    <div className="bg-red-300 h-screen text-center">
      <h1>Shop</h1>
      <div className="bg-blue-500">
        <Outlet />
      </div>
    </div>
  );
}

export default Shop;
