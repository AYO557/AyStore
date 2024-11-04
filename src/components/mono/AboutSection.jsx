import { RiStarSFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

function AboutSection() {
  const [products, setProducts] = useState([]);
  const { setUser } = useContext(UserContext);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    const api = "http://localhost:3000/api/products";
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    // using .then
    if (token) {
      axios
        .get(api, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setProducts(response.data.splice(1, 6));
          setUser(JSON.parse(localStorage.getItem("user")));
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.status === 401) {
            setUser(null);
          }
        });
    } else {
      setUser(null);
    }
  }, []);
  return (
    <div className="bg-blue-100">
      <header className="p-5">
        <h2 className="text-black text-4xl text-center font-bold">
          Purchase Products
        </h2>
      </header>
      <section className="h-full px-[140px] flex flex-wrap gap-10 justify-center">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Link key={product._id} to={`/shop/${product._id}`}>
                <div
                  className="bg-blue-500 h-[300px] w-[250px] rounded-xl p-2 shadow-lg shadow-blue-500 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
                  style={{
                    background: `url(${product.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex justify-between items-end text-blue-600 h-full">
                    <div>
                      <h3 className="" title={product.name}>
                        {product.name.split("").length > 14
                          ? product.name.slice(0, 14) + "..."
                          : product.name}
                      </h3>
                      <p className="font-bold text-2xl">${product.price}</p>
                      <span className="react-stars-icon flex">
                        <RiStarSFill size={20} color="orange" />
                        <RiStarSFill size={20} color="orange" />
                        <RiStarSFill size={20} color="orange" />
                        <RiStarSFill size={20} color="orange" />
                        <RiStarSFill size={20} color="orange" />
                      </span>
                    </div>
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        setCart((c) => c + 1);
                        console.log(`Add to cart ${product._id}`);
                      }}
                      className="bg-red-300 font-bold text-4xl h-12 w-12 text-center rounded-full text-white hover:bg-red-400"
                    >
                      +
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </section>
    </div>
  );
}

export default AboutSection;
