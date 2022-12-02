import React from "react";

const Aboutus = () => {
  return (
    <div className="container mx-auto my-20 bg-white p-10">
      <h2 className="text-3xl text-gray-900 text-center mb-6 font-semibold uppercase">
        About
        <span className="text-accent"> Us</span>
      </h2>
      <div className="hero text-gray-900 lg:w-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="object-cover w-[240px] h-[400px] rounded-lg mx-auto "
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Our Capabilities</h1>
            <p className="py-6">
              We are always aiming to exceed customer expectations and provide
              creative solutions to meet any kind of demand. Keeping up with the
              emerging trends, market needs and combining them with our
              technical and creative expertise…
            </p>
            <button className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
