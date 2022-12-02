import React from "react";

const ProdCard = ({ prod }) => {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={prod.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod.name}</h2>
        <p>Price: ${prod.sellingPrice}</p>
        <p>Details: {prod.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
