import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const { id } = useParams();

  useEffect(() => {
    const api = `http://localhost:3000/api/products/${id}`;
    axios
      .get(api, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  });
  return (
    <div>
      <h1>Products {id}</h1>
    </div>
  );
}

export default Products;
