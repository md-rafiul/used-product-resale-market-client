import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers";
import MyOrders from "../../Pages/Dashboard/Buyer/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct";
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/myorder",
            element: <MyOrders></MyOrders>,
          },
          {
            path: "/dashboard/addproduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/myproducts",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/allsellers",
            element: <AllSellers></AllSellers>,
            loader: () =>
              fetch(
                "https://b612-used-products-resale-server.vercel.app/users?role=seller"
              ),
          },
          {
            path: "/dashboard/allbuyers",
            element: <AllBuyers></AllBuyers>,
            loader: () =>
              fetch(
                "https://b612-used-products-resale-server.vercel.app/users?role=buyer"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
