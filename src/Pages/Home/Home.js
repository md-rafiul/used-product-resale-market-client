import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CategoryCard from "../Shared/CategoryCard";
import ProdCard from "../Shared/ProdCard";
import Aboutus from "./Aboutus";
import Banner from "./Banner";

const Home = () => {
  const { addvertise } = useContext(AuthContext);
  const [prods, setProds] = useState([]);
  const category = [
    {
      category: "ASUS",
      img: "https://cdn.mos.cms.futurecdn.net/YjJxpTHe3Z6i5AY3t4w2ER.jpg",
    },
    {
      category: "APPLE",
      img: "https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg",
    },
    {
      category: "HP",
      img: "https://www.pngmart.com/files/16/HP-Logo-PNG-Photos.png",
    },
  ];
  console.log(addvertise);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProds(data);
      });
  }, []);
  return (
    <div className="">
      {/* Admin ID: md.rafiul@gmail.com PASS: 123456 */}
      <Banner></Banner>
      <div className="p-10">
        {addvertise.length !== 0 && (
          <>
            <h2 className="text-4xl font-bold text-center my-6">
              Products For Advertise!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {addvertise.map((prod, i) => (
                <ProdCard key={i} prod={prod}></ProdCard>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-10">
        <h2 className="text-4xl font-bold text-center my-6">
          Products By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.map((prod, i) => (
            <CategoryCard key={i} prod={prod}></CategoryCard>
          ))}
        </div>
      </div>
      <div className="p-10">
        <h2 className="text-4xl font-bold text-center my-6">All Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prods.map((prod, i) => (
            <ProdCard key={i} prod={prod}></ProdCard>
          ))}
        </div>
      </div>
      <Aboutus></Aboutus>
    </div>
  );
};

export default Home;
