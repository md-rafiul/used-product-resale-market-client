import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [currentRole, setCurrentRole] = useState("seller");

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRole(data[0].role);
      });
  }, [user?.email, setCurrentRole]);

  return (
    <div>
      <div className="drawer drawer-mobile w-full">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  items-center mt-8 container lg:px-10 md:px-6 px-3 mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">
            Hello <span className="text-accent">{user?.displayName}</span>,
            Welcome to dashboard
          </h2>
          <Outlet />
          {/* <!-- Page content here --> */}
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden absolute top-2 right-2"
          >
            =
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4  w-60 font-bold text-white bg-primary">
            {/* <!-- Sidebar content here --> */}
            <li className="my-0">
              <Link className="px-3 py-1 w-full rounded" to="/dashboard">
                My Profile
              </Link>
            </li>
            {user && currentRole === "buyer" && (
              <>
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded" to="myorder">
                    My Orders
                  </Link>
                </li>
              </>
            )}
            {user && currentRole === "seller" && (
              <>
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded" to="addproduct">
                    Add A Product
                  </Link>
                </li>
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded" to="myproducts">
                    My Products
                  </Link>
                </li>
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded" to="">
                    My Buyers
                  </Link>
                </li>
              </>
            )}
            {user && currentRole === "admin" && (
              <>
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded" to="allbuyers">
                    All Buyers
                  </Link>
                </li>{" "}
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded" to="allsellers">
                    All Sellers
                  </Link>
                </li>
                <li className="my-0">
                  <Link className="px-3 py-1 w-full rounded">
                    Reported Items
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
