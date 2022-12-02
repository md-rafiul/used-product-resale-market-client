import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ProdRow from "./ProdRow";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProds, setMyProds] = useState([]);

  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server.vercel.app/products?sellerEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyProds(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-6">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {myProds.map((prod, i) => (
              <ProdRow key={i} i={i} user={prod}></ProdRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
