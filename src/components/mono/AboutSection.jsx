import canvas from "../../assets/img/our-shoes.jpg";
import { RiStarSFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

function AboutSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const api = "http://localhost:3000/api/products";
    const token = JSON.parse(localStorage.getItem("user")).token;
    // using .then
    axios
      .get(api, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
              <div
                key={product._id}
                className="bg-blue-500 h-[300px] w-[250px] rounded-xl p-2 shadow-lg shadow-blue-500 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
                style={{
                  background: `url(${product.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex justify-between items-end text-black h-full">
                  <div>
                    <h3 className="" title={product.name}>
                      {product.name.split("").length > 10
                        ? product.name.slice(0, 15) + "..."
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
                  <span className="bg-red-300 font-bold text-4xl h-12 w-12 text-center rounded-full text-white hover:bg-red-400">
                    +
                  </span>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default AboutSection;
