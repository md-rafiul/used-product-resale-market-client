import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ProdRow = ({ user, i }) => {
  const { setAddvertise } = useContext(AuthContext);
  const handleDelete = () => {};
  const handleAddvertise = () => {
    if (user.status === "available") {
      setAddvertise([user]);
    }
    toast.success("Product is up for advertise");
  };
  return (
    <tr className="hover">
      <th>{i + 1}</th>
      <td>{user.name}</td>
      <td>{user.sellingPrice}</td>
      <td>{user.status}</td>
      <td>
        <button className="btn btn-primary" onClick={handleAddvertise}>
          Advertise
        </button>
      </td>
      <td>
        <button className="btn btn-error" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProdRow;
