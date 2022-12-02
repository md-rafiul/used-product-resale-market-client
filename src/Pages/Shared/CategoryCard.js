import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ prod }) => {
  console.log(prod);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl text-center font-bold text-4xl h-[510px]">
        <Link className="card-body text-center">
          <img src={prod.img} alt="" />
          <>{prod.category}</>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
