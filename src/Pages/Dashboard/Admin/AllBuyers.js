import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "../../Shared/TableRow";

const AllBuyers = () => {
  const allBuyerData = useLoaderData();
  console.log(allBuyerData);

  const [buyerData, setBuyerData] = useState(allBuyerData);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to remove this item???"
    );
    if (proceed) {
      fetch(`https://b612-used-products-resale-server.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remaining = buyerData.filter((feed) => feed._id !== id);
            setBuyerData(remaining);
          }
        });
    }
  };

  return (
    <div className=" p-6">
      <h2 className="text-4xl font-bold text-center mb-6">All Buyers List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Varify User</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {buyerData.map((user, i) => (
              <TableRow
                key={i}
                i={i}
                user={user}
                handleDelete={handleDelete}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
