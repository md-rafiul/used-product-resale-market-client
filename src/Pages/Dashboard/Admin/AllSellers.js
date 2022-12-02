import React from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "../../Shared/TableRow";

const AllSellers = () => {
  const allSellerData = useLoaderData();
  console.log(allSellerData);
  return (
    <div className=" p-6">
      <h2 className="text-4xl font-bold text-center mb-6">All Sellers List</h2>
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
            {allSellerData.map((user, i) => (
              <TableRow key={i} i={i} user={user}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
